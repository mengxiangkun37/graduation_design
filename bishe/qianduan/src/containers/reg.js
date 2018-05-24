import React, { Component } from 'react';
import img1 from './../assets/images/ss4.jpg';
import { connect } from 'react-redux';
import * as actions from './../actions/reg/a_reg';
class Reg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      flag1: false,
      is_reg: 1
    }
  }
  componentWillMount() {

  }
  render() {
    let {
      reg,
      doReg,
      fieldChange,
      check,
      doReg1,
      check1
    } = this.props;
    console.log(reg.data)
    return (
      <div className='login'>
        <div className="login-title">
          <br />
          <h2>家具饰品商城</h2>
        </div>
        <div className="login-content">
          <img src={img1} />
          <div className="login-box">
            <h3>请注册</h3>
            {
              this.state.is_reg === 1 &&
              <div>
                <span
                  onClick={() => {
                    this.setState({
                      is_reg: 2
                    })
                  }}
                >商家注册</span>
              </div>
            }
            {
              this.state.is_reg === 2 &&
              <div>
                <span
                  onClick={() => {
                    this.setState({
                      is_reg: 1
                    })
                  }}
                >用户注册</span>
              </div>
            }
            <a href="login" className="to-reg">去登录</a>
            <form action='' method="post">
              <div className="user-name">
                <label for="user" id="i-u"></label>
                <input type="text"
                  name="uemail"
                  id="user"
                  placeholder="请输入账号"
                  value={reg.data.uemail}
                  onChange={(e) => {
                    fieldChange('uemail', e.target.value);
                  }}
                  onBlur={(e) => {
                    this.setState({
                      flag1: true
                    })
                    {
                      this.state.is_reg === 1 &&
                        check(e.target.value);
                    }
                    {
                      this.state.is_reg === 2 &&
                      check1(e.target.value);
                    }
                  }}
                />
                {
                  reg.data.flag &&
                  <span className="reg-tishi">该账号已被注册</span>
                }
              </div>
              <div className="pass-word">
                <label for="pass" id="i-p"></label>
                <input type="password"
                  name="pass" id="pass"
                  placeholder="设置密码"
                  value={reg.data.upass}
                  onChange={(e) => {
                    fieldChange('upass', e.target.value);
                  }}
                />
              </div>
              <div className="repass-word">
                <label for="repass" id="i-p"></label>
                <input type="password"
                  name="rpass"
                  id="repass"
                  placeholder="确认密码"
                  value={reg.data.rupass}
                  onChange={(e) => {
                    fieldChange('rupass', e.target.value);
                  }}
                />
                {
                  this.state.flag &&
                  <span className="reg-tishi">密码不相同</span>
                }
                {
                  this.state.flag2 &&
                  <span className="reg-tishi">输入不能为空</span>
                }
              </div>
              {
                this.state.is_reg === 1 &&
                <input type="submit"
                  id="to-index"
                  value="用 户 注 册"
                  onClick={(e) => {
                    if (reg.data.rupass !== reg.data.upass) {
                      this.setState({
                        flag: true
                      })
                    } else if (reg.data.rupass === '' || reg.data.upass === '' || reg.data.uemail === '') {
                      this.setState({
                        flag2: true
                      })
                    } else {
                      this.setState({
                        flag: false,
                        flag2: false
                      })
                      setTimeout(() => {
                        doReg();
                      }, 100);
                    }
                    e.preventDefault();
                    return false;
                  }}
                />
              }
              {
                this.state.is_reg === 2 &&
                <input type="submit"
                  id="to-index"
                  value="商 家 注 册"
                  onClick={(e) => {
                    if (reg.data.rupass !== reg.data.upass) {
                      this.setState({
                        flag: true
                      })
                    } else if (reg.data.rupass === '' || reg.data.upass === '' || reg.data.uemail === '') {
                      this.setState({
                        flag2: true
                      })
                    } else {
                      this.setState({
                        flag: false,
                        flag2: false
                      })
                      setTimeout(() => {
                        doReg1();
                      }, 100);
                    }
                    e.preventDefault();
                    return false;
                  }}
                />
              }
            </form>
          </div>
        </div>
      </div >
    );
  }
}

export default connect((store) => {
  return {
    reg: store.reg
  }
}, {
    ...actions
  })(Reg);
