import React, { Component } from 'react';
import ContentField from './../../ElementCV/ContentField/ContentField';
import CertificateSection from './CertificateSection';
import * as actions from './../../../actions/actionCertificate';
import * as actionsCV from './../../../actions/info.action';
import {connect} from 'react-redux';
import uuidv1 from 'uuid';

var language = "";

class CertificateSections extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      items : [],
      number : this.props.certificate.lenght
    }
  }

  componentWillMount(){
    this.props.fetchAllCertificate(this.props.idcv);
  }
  shouldComponentUpdate(nextProps){
    language = nextProps.info.language;
    return true;
  }
  changeLanguage = (language) =>{
    if (language === "vi" )
    return ("CHỨNG CHỈ");
    else return ("CERTIFICATE");
  }

  addNew = (number) =>{
    return {
        _id: uuidv1(),
        name : "TÊN CHỨNG CHỈ",
        day : "Ngày Cấp",
        content : "Nội Dung",
        idcv: this.props.idcv
    }
  }

  render() {
    var items = this.props.certificate;
    var {number} = this.state;
    return (
      <div className="Certificate-Sections">
        <ContentField name ={ this.changeLanguage(language) } 
            moveUp={(e)=>this.props.moveUpCertificate('Certificate', 'up', this.props.idcv)}
            moveDown={(e)=>this.props.moveDownCertificate('Certificate', 'down', this.props.idcv)}
            addSection={(e)=>this.props.addCertificate(this.addNew(number)) }
            hidden={(e)=>this.props.hidenCertificate('Certificate', this.props.idcv)}>
        {
            items.map((item,index) => (
              <CertificateSection key={index} deleteSection = {(e)=>this.props.deleteCertificate(item._id)}  >{item}</CertificateSection>
            ))
          }
        </ContentField>
        
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    info : state.info,
    certificate : state.certificate,
    idcv: state.idcv
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return{
    fetchAllCertificate : (idcv) =>{
      dispatch(actions.actFetchCertificateRequest(idcv));
    },
    addCertificate : (number) =>{
      dispatch(actions.actAddCertificateRequest(number));
    },
    deleteCertificate : (index) =>{
      dispatch(actions.actDeleteCertificateRequest(index));
    },
    moveUpCertificate : (name, direction, idcv) =>{
      dispatch(actionsCV.actUpdateListComponent(name, direction, idcv));
    },
    moveDownCertificate : (name, direction, idcv) =>{
      dispatch(actionsCV.actUpdateListComponent(name, direction, idcv));
    },
    hidenCertificate : (name, idcv) =>{
      dispatch(actionsCV.actHiddenComponent(name, idcv));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CertificateSections);