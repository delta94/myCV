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
      width           : '500px'
    }
};

class AddAndSort extends Component {
    closeModal = () =>{
        this.props.turnOffModal()
    }
    componentWillMount(){
        console.log(this.props.listComponent)
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
                            <div className="listItem">
                            {
                                this.props.listComponent.map((item, index)=>(
                                    <div className="row" key={index}>
                                        <div className="col-md-4 text-right">
                                            <input type="checkbox" name="select" 
                                            defaultChecked={item.Check} />
                                        </div>
                                        <div className="col-md-8">{item.Name}</div>
                                    </div>
                                ))
                            }
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
        idcv : state.idcv
    }
}
  
const mapDispatchToProps = (dispatch, props) =>{
    return{
        fetchCV : (id) =>{
            dispatch(actions.actFetchCVRequest(id));
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddAndSort);