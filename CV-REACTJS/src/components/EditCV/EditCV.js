import React, { Component } from 'react';
import './EditCV.css';
import SelectLanguage from './SelectLanguage/SelectLanguage';
import FontSize from './FontSize/FontSize';
import Arrow from './Arrow/Arrow';
import Color from './Color/Color';
import {connect} from 'react-redux';
import * as actions from './../../actions/info.action';
import AddAndSort from './Add/AddAndSort';

class EditCV extends Component {

  constructor(props){
    super(props);
    this.state = {
      font: this.props.info.font,
      isShowAdd : false
    }
  }

  onChange = (event) =>{
    var target = event.target;
    var name = target.name;
    var value =  target.value;
    this.setState({
      [name] : value
    });
    this.props.changeFont(value,this.props.idcv);
  }

  isShowAdd = () =>{
    this.setState({
      isShowAdd : !this.state.isShowAdd
    });
  }

  showAdd = () =>{
    if(this.state.isShowAdd === true){
      return <AddAndSort modalIsOpen={this.state.isShowAdd} turnOffModal={this.isShowAdd}/>
    }
  }

  render() {
    return (
      <div className="EditCV container">
        <div className="row">
          <div className="col-md-1">
            <SelectLanguage />
          </div>

          <div className="col-md-2">
            <Color />
          </div>

          <div className="font-cv col-md-2">
            <form>
              <div className="form-group">
                <label>Chọn font chữ</label>
                <select className="form-control" name="font" value={this.state.font} id="exampleFormControlSelect1" onChange={this.onChange}>
                  <option value="Arial">Arial</option>
                  <option value="Roboto">Roboto</option>
                  <option value="Open">Open san</option>
                  <option value="Lato">Lato</option>
                </select>
              </div>
            </form>
          </div>

          <div className="col-md-2">
            <FontSize />
          </div>

          <div className="col-md-2">
            <Arrow />
          </div>

          <div className="add-cv col-md-1" onClick={this.isShowAdd}>
            <label >Thêm mục</label>
            <span className="arrows arrows-2"><i className="fas fa-plus-circle"></i></span>
          </div>


          <div className="change-cv col-md-1">
            <label >Đổi mẫu CV</label>
            <span className="changeCV"><i className="far fa-copy"></i></span>
          </div>

          <div className="save-cv col-md-1">
            <label >Lưu CV</label>
            <div className="saveCV"><i className="far fa-save"></i></div>
          </div>

        </div>

        <div className="row editor-controls">
            <div className="col-md-2"></div>
            <div className="editor-control-group col-md-2">
              <span className="editor-control-item editor-control-bold"><i className="fas fa-bold"></i></span>
              <span className="editor-control-item editor-control-italic"><i className="fas fa-italic"></i></span>
              <span className="editor-control-item editor-control-underline"><i className="fas fa-underline"></i></span>
            </div>

            <div className="editor-control-group col-md-2">
              <span className="editor-control-item editor-control-align-left"><i className="fas fa-align-left"></i></span>
              <span className="editor-control-item editor-control-align-center"><i className="fas fa-align-center"></i></span>
              <span className="editor-control-item editor-control-align-right"><i className="fas fa-align-right"></i></span>
            </div>

            <div className="editor-control-group col-md-2">
              <span className="editor-control-item editor-control-undo"><i className="fas fa-undo"></i></span>
              <span className="editor-control-item editor-control-redo"><i className="fas fa-redo"></i></span>
            </div>
            {this.showAdd()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    idcv : state.idcv
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return{
    changeFont : (fo,id) =>{
      dispatch(actions.actChangeFontRequest(fo,id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCV);
