import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './MenuHome.css';

class MenuHome extends Component {
  render() {
    return (
      <div className="menu-home container-fuild">
        <div className="row">
          <div className="button-cv col-md-6">
            <Link to="/create-cv" className="btn btn-success">Tạo CV ngay</Link>
          </div>
          <div className="introduce col-md-6">
            <h3>Tạo CV đầu tiên trên TopCV</h3>
            <p>Bạn muốn có công việc phù hợp với năng lực bản thân?<br />
            Hãy tạo ngay CV trên TopCV, chúng tôi sẽ gợi ý cho bạn những công việc phù hợp nhất.</p>
          </div>
        </div>
      </div>

    );
  }
}

export default MenuHome;
