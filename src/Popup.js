import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as styles from "./Popup.less";
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// import { Route } from 'react-router-dom';



export default class Popup extends React.Component {
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
      portpolio: null,
      size: "",

      redirect: "",
      loading: false,
    };
    this.onChangeGender = this.onChangeGender.bind(this);
  }

  render() {
    return (
      <div className={cx('popup', { show: this.props.show })} >

        <div className={cx('border', 'popup_inner')}>
          <div className='title'>
            <img src="lever.svg" />
            <h1>{this.props.text}</h1>
            <button onClick={this.props.closePopup}><img src="cancel.svg" /></button>
          </div>
          <div className="content">

            <div>
              <span>팀명</span>
              <div>
                <input type="text" placeholder="팀명을 입력해주세요." />
              </div>
            </div>
            <div>
              <span>이름</span>
              <div>
                <input type="text" placeholder="이름을 입력해주세요." />
              </div>
            </div>
            <div>
              <span>성별</span>
              <div>
                {/* {cx({ checked: this.state.role === "팀장" })} */}
                <button onClick={this.onChangeGender} className={cx({ checked: this.state.gender === "여자" })}>여자</button>
                <button onClick={this.onChangeGender} className={cx({ checked: this.state.gender === "남자" })}>남자</button>
              </div>
            </div>
            <div>
              <span>학번</span>
              <div>
                <input type="text" placeholder="학번을 입력해주세요." maxLength={5} />
              </div>
            </div>
            <div>
              <span>전화번호</span>
              <div>
                <input type="text" placeholder="전화번호를 입력해주세요." maxLength={5} />
              </div>
            </div>
            <div>
              <span>이메일</span>
              <div>
                <input type="text" placeholder="이메일을 입력해주세요." maxLength={5} />
              </div>
            </div>
            <div>
              <span>직군 선택</span>
              <div>
                {/* {cx({ checked: this.state.role === "팀장" })} */}
                <button onClick={this.onChangeGender} className={cx({ checked: this.state.gender === "팀장" })}>팀장</button>
                <button onClick={this.onChangeGender} className={cx({ checked: this.state.gender === "개발자" })}>개발자</button>
                <button onClick={this.onChangeGender} className={cx({ checked: this.state.gender === "디자인" })}>디자인</button>
              </div>
            </div>
            <div>
              <span>포트폴리오</span>
              <div>
                <input type="text" placeholder="file:///Users/sunrin/Desktop/Portfolio.zip" maxLength={5} />
              </div>
            </div>
            <div>
              <span>옷 사이즈</span>
              <div>
                {/* {cx({ checked: this.state.role === "팀장" })} */}
                <button onClick={this.onChangeGender} className={cx({ checked: this.state.gender === "팀장" })}>S</button>
                <button onClick={this.onChangeGender} className={cx({ checked: this.state.gender === "개발자" })}>M</button>
                <button onClick={this.onChangeGender} className={cx({ checked: this.state.gender === "디자인" })}>L</button>
                <button onClick={this.onChangeGender} className={cx({ checked: this.state.gender === "디자인" })}>XL</button>
                <button onClick={this.onChangeGender} className={cx({ checked: this.state.gender === "디자인" })}>XXL</button>
              </div>
            </div>
          </div>

          <button onClick={this.props.closePopup}>{this.props.buttonName}</button>
        </div>
      </div>
    );
  }

  onChangeGender(e) {
    this.setState({ gender: e.currentTarget.innerHTML })
  }
}



// ReactDOM.render(
//   <App />,
//   document.getElementById('content')
// );

