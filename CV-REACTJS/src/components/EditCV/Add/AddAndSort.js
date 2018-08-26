import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/info.action';
import Modal from 'react-modal';

Modal.setAppElement('#root')

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
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
                        <button onClick={this.closeModal}>close</button>
                </Modal>
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
        changeArrow : (ar, id) =>{
            dispatch(actions.actChangeArrowRequest(ar,id));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddAndSort);