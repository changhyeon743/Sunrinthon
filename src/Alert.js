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

    };
  }

  render() {
    return (
      <div className={cx('popup', { show: this.props.show })} >

        <div className={cx('border', 'popup_inner')}>
          <div className='title'>
            <img src="lever.svg" />
            <h1>{this.props.title}</h1>
          </div>
          <div className="content">
            {this.props.content}
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

