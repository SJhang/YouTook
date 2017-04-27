import React from 'react';

window.videoAPIloaded = {};
let loadYT = window.videoAPIloaded.youtube = false;

class YouTubePlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!loadYT) {
      loadYT = new Promise((resolve) => {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.onYouTubeIframeAPIReady = () => resolve(window.YT);
      });
    }
    loadYT.then((YT) => {
      debugger;
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

  }

  render () {
    return (
      <div></div>
    )
  }
}

export default YouTubePlayer;
