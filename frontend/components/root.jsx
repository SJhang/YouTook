import React from 'react';
import Header from './main/header';
import SearchBar from './main/search_bar';
import YouTubePlayer from './youtube/youtube_player';
import YouTubeList from './youtube/youtube_list';
import $ from 'jquery';
import { CONFIG } from '../../config';

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      params: "",
      queryList: []
    };

    this.updateQueryLists = this.updateQueryLists.bind(this)
  }

  // asynchronously fetch list of youtube videos using the input params
  fetchYouTubeLists() {
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      dataType: 'json',
      data: {
        key: CONFIG.youtubeAPI,
        part: 'snippet',
        maxResults: 50,
        type: 'video',
        order: 'viewCount',
        q: `${this.state.params}`
      },
      success: data => this.updateQueryLists(data),
      error: message => this.displayErrors(message)
    })
  }

  displayErrors(e) {
    console.log(e);
  }

  // update state with youtube list results on success ajax call
  updateQueryLists(data) {
    this.setState({ queryList: data.items });
  }

  renderLists() {
    let queryList = this.state.queryList;
    return (<YouTubeList queryList={queryList}/>);
  }

  // handle input
  handleChange(e) {
    this.setState({ params: e.target.value })
  }

  // handle enter and click for input form and also prevents from rerendering
  handleSubmit(e) {
    e.preventDefault();
    this.fetchYouTubeLists();
  }

  render () {
    return (
      <div id="outer-wrap">
        <Header />
        <div id="main-content-wrap">
          <SearchBar
            params={this.state.params}
            handleChange={e => this.handleChange(e)}
            handleSubmit={e => this.handleSubmit(e)}/>
          {this.renderLists()}
        </div>
      </div>
    )
  }
}

export default Root;
