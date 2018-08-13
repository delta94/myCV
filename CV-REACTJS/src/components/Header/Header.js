import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import './Header.css';

const menus = [
  {
    name : "Trang chủ",
    to : "/",
    exact : true
  },
  {
    name : "Quản lý sản phẩm",
    to : "/myCV",
    exact : false
  }
];

const MenuLink = ({label, to, active}) =>{
  return(
    <Route
      path = {to}
      exact = {active}
      children ={ ({match}) =>{
        var active = match ? "active" : "";
        return(
          <li className={"nav-item " + {active}}>
            <Link to={to} className="nav-link">
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
}


class Header extends Component {
  render() {
    return (
      <div className="header container-fuild">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="">logo</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {this.showMenu(menus)}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-user" aria-hidden="true" /> Đăng nhập
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="">Tạo CV</a>
                  <a className="dropdown-item" href="">CV của bạn</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="">Đăng xuất</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
  showMenu =(menus)=>{
    var result = null;
    if(menus.length > 0){
      result = menus.map((menu, index)=>{
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            active={menu.exact}
          />
        );
      });
    }
    return result;
  }

}

export default Header;
