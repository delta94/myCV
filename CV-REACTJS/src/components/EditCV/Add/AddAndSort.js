import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/info.action';
import Modal from 'react-modal';
import './AddAndSort.css';

Modal.setAppElement('#root')

const customStyles = {
    content : {
      top             : '50%',
      left            : '50%',
      right           : 'auto',
      bottom          : 'auto',
      marginRight     : '-50%',
      transform       : 'translate(-50%, -50%)',
      padding         : '0px',
      width           : '700px'
    }
};

class AddAndSort extends Component {
    closeModal = () =>{
        this.props.turnOffModal()
    }
    render(){
        return (
            <div className="AddAndSort">
                <Modal isOpen={this.props.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal">
                        <div>
                            <div className="HeaderModal text-center">
                                <h5>Chọn mục hiển thị</h5>
                            </div>
                            <div className="row">
                                <div className="listItem col-md-6">
                                {
                                    this.props.listComponent.map((item, index)=>(
                                        <div className="row" key={index}>
                                            <div className="text-name col-md-12 text-center" 
                                            onClick={() => {this.props.appear(item, this.props.idcv)}}>{item}</div>
                                        </div>
                                    ))
                                }
                                </div>
                                <div className="listItem col-md-6">
                                {
                                    this.props.info.listComponent.map((item, index)=>(
                                        <div className="row" key={index}>
                                            <div className="text-name col-md-12 text-center"
                                            onClick={() => {this.props.hidden(item, this.props.idcv)}}>{item}</div>
                                        </div>
                                    ))
                                }
                                </div>
                            </div>
                        </div>                        
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        listComponent : state.listComponent,
        idcv : state.idcv,
        info : state.info
    }
}
  
const mapDispatchToProps = (dispatch, props) =>{
    return{ 
        fetchCV : (id) =>{
            dispatch(actions.actFetchCVRequest(id));
        },
        hidden : (name, id) =>{
            dispatch(actions.actHiddenComponent(name, id));
            dispatch(actions.actAllListComponent(id));
        },
        appear : (name, id) =>{
            dispatch(actions.actAppearComponent(name, id));
            dispatch(actions.actAllListComponent(id));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddAndSort);