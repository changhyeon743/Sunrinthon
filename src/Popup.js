import React from 'react';
import * as styles from './App.css';
import Alert from './Alert';
// import * as styles from "./Popup.less";
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// import { Route } from 'react-router-dom';



export default class Popup extends React.Component {
  constructor() {
    super();

    this.state = {
      showAlert: false,
      name: "",
      gender: "",
      phone: "",
      sID: "",
      team: "",
      role: "",
      type: "",
      email: "",
      project: "",
      portpolio: null,
      size: "",

      redirect: "",
      loading: false,
    };
    this.onChangeTeam = this.onChangeTeam.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangesID = this.onChangesID.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePortfolio = this.onChangePortfolio.bind(this);

    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.submitt = this.submitt.bind(this);
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
                <input type="text" placeholder="팀명을 입력해주세요." onChange={this.onChangeTeam} />
              </div>
            </div>
            <div>
              <span>이름</span>
              <div>
                <input type="text" placeholder="이름을 입력해주세요." onChange={this.onChangeName} />
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
                <input type="text" placeholder="학번을 입력해주세요." onChange={this.onChangesID} />
              </div>
            </div>
            <div>
              <span>전화번호</span>
              <div>
                <input type="text" placeholder="전화번호를 입력해주세요." onChange={this.onChangePhone} />
              </div>
            </div>
            <div>
              <span>이메일</span>
              <div>
                <input type="text" placeholder="이메일을 입력해주세요." onChange={this.onChangeEmail}  />
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
                <input type="file" id="fileInput" placeholder="file:///Users/sunrin/Desktop/Portfolio.zip" onChange={this.onChangePortfolio}  />
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

          <button onClick={this.submitt}>{this.props.buttonName}</button>
          {this.state.showAlert ?
            <Alert
              title='제출 완료'
              closePopup={this.close.bind(this)}
              show={this.state.showAlert}
              name={this.state.name}
              gender= {this.state.gender}
              phone= {this.state.phone}
              team= {this.state.team}
              role= {this.state.role}
              type= {this.state.type}
              project= {this.state.project}
              email= {this.state.email}
              portpolio= {this.state.portpolio}
              size= {this.state.size}
              buttonName='확인'
            />
            : null
          }
        </div>
      </div>
    );
  }

  close() {
    //this.props.closePopup()
    
  }
  
  onChangeTeam(e) {
    this.setState({ team: e.currentTarget.value })
  }
  onChangeName(e) {
    this.setState({ name: e.currentTarget.value })
  }
  onChangeGender(e) {
    this.setState({ gender: e.currentTarget.innerHTML })
  }

  onChangesID(e) {
    this.setState({ sID: e.currentTarget.value })
  }
  onChangePhone(e) {
    this.setState({ phone: e.currentTarget.value })
  }
  onChangeEmail(e) {
    this.setState({ email: e.currentTarget.value })
  }
  onChangePortfolio(e) {
    const file = e.currentTarget.files[0];

    if (file != null) {
      if (file.size > 20971520) {
        alert('20MB초과')
      } else {
        this.setState({ portpolio: e.currentTarget.files[0] });
      }
    }
  }
  onChangeRole(e) {
    this.setState({ role: e.currentTarget.innerHTML })
  }
  onChangeSize(e) {
    this.setState({ size: e.currentTarget.innerHTML })
  }


  submitt() {
    this.setState({
      showAlert: !this.state.showAlert
    })
  }
}



// ReactDOM.render(
//   <App />,
//   document.getElementById('content')
// );

