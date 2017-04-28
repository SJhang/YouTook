import React from 'react';
import YouTubePlayer from './youtube_player';

class YouTubeList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    return this.props.queryList.map((item, idx) => (
      <li key={idx} videoId={item.id.videoId}>
        <img src={item.snippet.thumbnails.high.url} />
        <h3>{item.snippet.title}</h3>
      </li>
    ));
  }


  render () {
    return(
      <ul className="search-results">
        {this.renderList()}
      </ul>
    )
  }
}

export default YouTubeList;
