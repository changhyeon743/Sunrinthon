import React from 'react';
import * as styles from './App.css';
// import * as styles from "./Popup.less";
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
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
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
            <div id="gender">
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
                <input type="text" placeholder="학번을 입력해주세요."  />
              </div>
            </div>
            <div>
              <span>전화번호</span>
              <div>
                <input type="text" placeholder="전화번호를 입력해주세요." />
              </div>
            </div>
            <div>
              <span>이메일</span>
              <div>
                <input type="text" placeholder="이메일을 입력해주세요."  />
              </div>
            </div>
            <div>
              <span>직군 선택</span>
              <div>
                {/* {cx({ checked: this.state.role === "팀장" })} */}
                <button onClick={this.onChangeRole} className={cx({ checked: this.state.role === "팀장" })}>팀장</button>
                <button onClick={this.onChangeRole} className={cx({ checked: this.state.role === "개발자" })}>개발자</button>
                <button onClick={this.onChangeRole} className={cx({ checked: this.state.role === "디자인" })}>디자인</button>
              </div>
            </div>
            <div id="portfolio">
              <span>포트폴리오</span>
              <div>
                <input type="file" id="fileInput" placeholder="file:///Users/sunrin/Desktop/Portfolio.zip"  />
                <label htmlFor="fileInput">첨부</label>
              </div>
            </div>
            <div id ="size">
              <span>옷 사이즈</span>
              <div>
                {/* {cx({ checked: this.state.role === "팀장" })} */}
                <button onClick={this.onChangeSize} className={cx({ checked: this.state.size === "S" })}>S</button>
                <button onClick={this.onChangeSize} className={cx({ checked: this.state.size === "M" })}>M</button>
                <button onClick={this.onChangeSize} className={cx({ checked: this.state.size === "L" })}>L</button>
                <button onClick={this.onChangeSize} className={cx({ checked: this.state.size === "XL" })}>XL</button>
                <button onClick={this.onChangeSize} className={cx({ checked: this.state.size === "XXL" })}>XXL</button>
              </div>
            </div>
          </div>

          <button onClick={this.props.closePopup}>{this.props.buttonName}</button>
        </div>
      </div>
    );
  }

  onChangeRole(e) {
    this.setState({ role: e.currentTarget.innerHTML })
  }
  onChangeGender(e) {
    this.setState({ gender: e.currentTarget.innerHTML })
  }
  onChangeSize(e) {
    this.setState({ size: e.currentTarget.innerHTML })
  }
}



// ReactDOM.render(
//   <App />,
//   document.getElementById('content')
// );

