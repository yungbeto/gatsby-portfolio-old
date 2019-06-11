import React, { Component } from 'react';
import './Header.module.scss';

class Header extends Component {
    render() {
        return (
          <header className="globalHead">
            <div className="globalHead__left">
              <span className="globalHead__left--item bold">Roby Saavedra</span>
              <span className="globalHead__left--item">Product Designer</span>
            </div>
            <div className="globalHead__right">
              <span className="globalHead__right--item">NYC</span>
            </div>
          </header>
        )
    }
}

export default Header;