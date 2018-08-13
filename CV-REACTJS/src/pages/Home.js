import React, { Component } from 'react';
import MenuHome from './../components/MenuHome/MenuHome';
import ShowCV from './../components/ShowCV/ShowCV';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <MenuHome />
        <ShowCV />
      </div>
    );
  }
}

export default Home;
