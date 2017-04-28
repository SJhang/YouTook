import React from 'react';

// hash for all the video APIs
window.videoAPIloaded = {};
// initialize youtube key for is api loaded to false
let loadYT = window.videoAPIloaded.youtube = false;

class YouTubePlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // if the youtube API is not called use Promise to call ifram_api from youtube.com
    // thenable for Promises
    if (!loadYT) {
      loadYT = new Promise((resolve) => {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.onYouTubeIframeAPIReady = () => resolve(window.YT);
      });
    }
    // when successfully called, create a player (iframe) using the params
    loadYT.then((YT) => {
      this.player = new YT.Player(this.youtubePlayerAnchor, {
        height: this.props.height || 315,
        width: this.props.width || 500,
        videoId: this.props.YTid,
        options: {
          onStateChange: this.onPlayerStateChange
        }
      });
    });
  }

  onPlayerStateChange(e) {
    debugger;
  }
  
  render () {
    return (
      <section id="youtube-content-wrapper">
        <div ref={r => {this.youtubePlayerAnchor = r}}></div>
      </section>
    )
  }
}

export default YouTubePlayer;
