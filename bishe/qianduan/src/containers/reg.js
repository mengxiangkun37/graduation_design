import React, { Component } from 'react';
import img1 from '../assets/images/ss4.jpg';
class Reg extends Component {
  
  render() {
    return (
      <div className='login'>
        <div class="login-title">
          <br />
          <h2>家具饰品商城</h2>
        </div>
        <div class="login-content">
          <img src={img1} />
          <div class="login-box">
            <h3>请注册</h3>
            <a href="login" class="to-reg">去登录</a>
            <form action='' method="post">
              <div class="user-name">
                <label for="user" id="i-u"></label>
                <input type="text" name="uemail" id="user" placeholder="请输入账号" />
              </div>
              <div class="pass-word">
                <label for="pass" id="i-p"></label>
                <input type="password" name="pass" id="pass" placeholder="设置密码" />
              </div>
              <div class="repass-word">
                <label for="repass" id="i-p"></label>
                <input type="password" name="rpass" id="repass" placeholder="确认密码" />
              </div>
              <input type="submit" id="to-index" value="注册" />
            </form>
          </div>
        </div>
      </div >
    );
  }
}

export default Reg;