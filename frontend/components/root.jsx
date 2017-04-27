import React from 'react';
import Header from './header';
import YoutubePlayer from './youtube_player';

class Root extends React.Component {
  render () {
    return (
      <div id="outer-wrap">
        <Header />
        <YoutubePlayer
          height="315"
          width="500"
          src="https://www.youtube.com/embed/sGPrx9bjgC8"/>
      </div>
    )
  }
}

export default Root;
