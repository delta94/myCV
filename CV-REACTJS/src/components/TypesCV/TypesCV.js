import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class TypesCV extends Component {

  constructor(props){
    super(props);
  }

  selectCV = (id) =>{
    this.props.selected(id);
  }

  render() {
    return (
      <div className="maucv col-md-3 card">
        <img className="img-cv card-img-top" src="" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">CV số{this.props.id}</h5>
          <p className="card-text">Đây là cv của bạn</p>
          <Link to={`/create-cv/${this.props.id}`} onClick={this.selectCV(this.props.id)} className="btn btn-primary">Đi tới chỉnh sửa</Link>
        </div>
      </div>
    );
  }
}

export default TypesCV;
