import React from 'react';
import YouTubeList from '../youtube/youtube_list';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <form
        className="search-bar-wraaper"
        onSubmit={e => this.props.handleSubmit(e)}>
        <input
          type="text"
          className="search-input-box"
          value={this.props.params}
          placeholder="Search"
          autoFocus
          onChange={e => this.props.handleChange(e)}></input>
        <button type='submit'>
          <i className="fa fa-search fa-lg" aria-hidden="true"/>
        </button>
      </form>
    )
  }
}

export default SearchBar;
