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

    this.state = { params: "" };
    this.queryList = [];
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

  // update youtube list results from the query
  updateQueryLists(data) {
    new Promise((resolve) => {
      this.queryList = data.items ? data.items : '';
      this.queryList.map((item, idx) => {
        const parentNode = document.querySelector('.search-results');
        // with document.querySelector, appendChild doesn't work with react element
        // instead use createElements
        const videoPreview = document.createElement('li');
        videoPreview.key = {idx};
        videoPreview.className = "video-preview";
        videoPreview.videoId = item.id.videoId;

        const thumbnail = document.createElement('img');
        thumbnail.src = item.snippet.thumbnails.high.url;

        const desc = document.createElement('span');
        desc.innerHTML = item.snippet.title;

        videoPreview.appendChild(thumbnail);
        videoPreview.appendChild(desc);

        parentNode.appendChild(videoPreview);
      });
      // resolve(this.queryList);
    })
    // .then(list => console.log(list));
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
        <SearchBar
          params={this.state.params}
          handleChange={e => this.handleChange(e)}
          handleSubmit={e => this.handleSubmit(e)}/>
        <div id="main-content-wrap">
          <div className="currently-playing"></div>
          <YouTubeList />
        </div>
      </div>
    )
  }
}

export default Root;
