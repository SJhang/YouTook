import React from 'react';

const SearchBar = ({ params, handleChange, handleSubmit }) => {
  return (
    <form
      className="search-bar-wrapper"
      onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        className="search-input-box"
        value={params}
        placeholder="Search"
        autoFocus
        onChange={e => handleChange(e)}></input>
      <button type='submit'>
        <i className="fa fa-search fa-lg" aria-hidden="true"/>
      </button>
    </form>
  )
}

export default SearchBar;
