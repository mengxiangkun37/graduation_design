import React, { Component } from 'react';
import img1 from '../assets/images/ss4.jpg';
class Login extends Component {

  render() {
    return (
      <div class='login'>
        <div class="login-title">
          <br />
          <h2>家具饰品商城</h2>
        </div>
        <div class="login-content">
          <img src={img1} />
          <div class="login-box">
            <h3>家具饰品商城</h3>
            <a href="reg" class="to-reg">去注册</a>
            <form action="user/do_login" method="post">
              <div class="user-name">
                <label for="user" id="i-u"></label>
                <input type="text" name="email" id="user" placeholder="请输入邮箱" />
              </div>
              <div class="password">
                <label for="pass" id="i-p"></label>
                <input type="password" name="pwd" id="pass" placeholder="请输入密码" />
              </div>
              <input type="submit" name="" id="to-index" value="登录" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;