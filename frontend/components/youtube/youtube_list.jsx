import React from 'react';
import $ from 'jquery';
import YouTubePlayer from './youtube_player';

class YouTubeList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    return this.props.queryList.map((item, idx) => (
      <div
        key={idx}
        videoId={item.id.videoId}
        className="youtube-list-item"
        onClick={(e) => this.handleClick(e, item.id.videoId)}>
        <img src={item.snippet.thumbnails.high.url}></img>
        <div className="youtube-item-options">
          <blockquote className="blockquote">
            <p className="mb-0">{item.snippet.title}</p>
            <footer className="blockquote-footer">{item.snippet.channelTitle}</footer>
          </blockquote>

        </div>
      </div>
    ));
  }

  handleClick(e, id) {
    console.log(id);
    window.player.cueVideoById(id);
  }

  renderAddToList() {
    if (typeof(localStorage) === undefined) {
      alert("This Browser does not support list");
    } else {
      try {
        return (
          <button onClick={e => this.handleAddToList(e)}>Add list</button>
        )
      } catch (e) {
      }
    }
  }

  handleAddToList(e) {

  }

  // renderYouTubePlayer () {
  //   console.log(this.state.currentVideo)
  //   return (<YouTubePlayer videoId={this.state}/>);
  //   // if (this.state.currentVideo) {
  //   // }
  // }

  render () {
    return(
      <span className="search-results">
        <YouTubePlayer />
        {this.renderList()}
      </span>
    )
  }
}

export default YouTubeList;
