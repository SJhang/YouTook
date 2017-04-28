import React from 'react';

const Header = (props) => {
  return (
    <header id="header">
      <div className="header-logo">
        <i className="fa fa-diamond fa-3x animated swing infinite" aria-hidden="true"></i>
        <span>YouTook</span>
      </div>
      <div className="header-links">
        <span className="about">About</span>
        <span className="contact">Contact</span>
      </div>
    </header>
  )
}

export default Header;
