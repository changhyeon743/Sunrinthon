import React from 'react';
import './App.css';
// import * as styles from "./Popup.less";
import * as classNames from 'classnames/bind';
import Popup from './Popup';
import Alert from './Alert'
// const cx = classNames.bind(styles);

// import { Route } from 'react-router-dom';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      showAlert: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  toggleAlert() {
    this.setState({
      showAlert: !this.state.showAlert
    })
  }
  render() {
    return (
      <div className='app'>
        <h1>Sunrinton style popup</h1>
        <button onClick={this.togglePopup.bind(this)}>show popup</button>
        <button onClick={this.toggleAlert.bind(this)}>show alert</button>

        <button onClick={() => { alert('woooooooot?'); }}>try me when popup is open</button>
        {this.state.showPopup ?
          <Popup
            text='신청서 작성'
            closePopup={this.togglePopup.bind(this)}
            show={this.state.showPopup}
            buttonName='제출'
          />
          : null
        }
        {this.state.showAlert ?
          <Alert
            title='탈락했습니다ㅜㅜ'
            content='죄송합니다.<br/>
            포트폴리오 심사에서 떨어지셨습니다.<br/>
            신청해주셔서 감사합니다.'
            closePopup={this.toggleAlert.bind(this)}
            show={this.state.showAlert}
            buttonName='확인'
          />
          : null
        }
      </div>
    );
  };

  
};



// ReactDOM.render(
//   <App />,
//   document.getElementById('content')
// );

