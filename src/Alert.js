import React from 'react';
import * as styles from './Alert.css';
// import * as styles from "./Popup.less";
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// import { Route } from 'react-router-dom';

export default class Alert extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      gender: "",
      phone: "",
      sID: "",
      team: "",
      role: "",
      type: "",
      project: "",
      email: "",
      portpolio: null,
      size: "",

      redirect: "",
      loading: false,
    };
  }

  render() {
    return (
      <div className={cx('alert', { show: this.props.show })} >

        <div className={cx('border', 'alert_inner')}>
          <div className='title'>
            <img src="lever.svg" />
            <h1>{this.props.title}</h1>
          </div>
          <div className="content">
            <br/>
            합격 여부는 O월 O일 sunr.in을 통해 공개될 예정입니다.<br/>
            <br/>
            팀명 : {this.props.team}<br/>
            이름 : {this.props.name}<br/>
            성별 : {this.props.gender}<br/>
            전화번호 : {this.props.phone}<br/>
            이메일 : {this.props.email}<br/>
            직군 : {this.props.role}<br/>
            옷 사이즈 : {this.props.size}<br/>
            <br/>
            위 적힌 정보가 본인의 정보가 맞는지 다시 한 번 확인하여 주시기<br/>
            바랍니다. 수정을 원하실 경우 페이스북 페이지로 메세지를 보내주세요.<br/>
            합격 여부는 O월 O일 sunr.in을 통해 공개될 예정입니다.
          </div>
          <button onClick={this.props.closePopup}>{this.props.buttonName}</button>
        </div>
      </div>
    );
  }
}



// ReactDOM.render(
//   <App />,
//   document.getElementById('content')
// );

