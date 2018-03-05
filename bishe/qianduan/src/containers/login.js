import React, { Component } from 'react';
import img1 from '../assets/images/ss4.jpg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './../actions/login/a_login';
class Login extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {

  }
  render() {
    let {
      common,
      fn,
      user_login,
      fieldChange
    } = this.props;
   
    // document.cookie = 'id='+ common.data.uid;
   
    return (
      <div className='login'>
        <div className="login-title">.
          <br />
          <h2>家具饰品商城</h2>
        </div>
        <div className="login-content">
          <img src={img1} />
          <div className="login-box">
            <h3
              onClick={() => {
                user_login();
              }}
            >家具饰品商城</h3>
            <a href="reg" className="to-reg">去注册</a>
            <form action="user/do_login" method="post">
              <div className="user-name">
                <label id="i-u"></label>
                <input type="text"
                  name="email"
                  id="user"
                  placeholder='请输入账号'
                  value={common.data.uemail}
                  onChange={(e) => {
                    fieldChange('uemail', e.target.value);
                  }}
                />
              </div>
              <br/>
              <br/>
              <div className="password">
                <label id="i-p"></label>
                <input
                  type="password"
                  name="pwd" id="pass"
                  placeholder='请输入密码'
                  value={common.data.upass}
                  onChange={ (e) => {
                    fieldChange('upass', e.target.value);
                  }}
                />
              </div>
              <br/>
              <input type="submit"
                name=""
                id="to-index"
                value="登录"
                onClick={(e) => {
                  user_login();
                    e.preventDefault();
                    this.context.router.history.push({
                    pathname: 'home'
                });
               
                }}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
Login.contextTypes  = {
  router: PropTypes.object
}

export default connect((store) => {
  return {
    common: store.common
  }
}, {
    ...actions
  })(Login);
