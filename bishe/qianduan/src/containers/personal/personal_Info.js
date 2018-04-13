import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/personal/a_personal';
class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    this.props.personal_Init();
  }
  render() {
    let {
      personal,
      fieldChange
    } = this.props;
    console.log(personal.data)
    return (
      <div>
        <div className="user-info">
          <div className="user-title unline">
            <strong>个人信息</strong>
            <small>/ Personal Information</small>
          </div>
          <div className="user-pic unline">
            <div className="pic"><img src={require("./../../assets/images/s1.jpg")} /></div>
            <div className="n-name">用户名：<span> {personal.data.user.uemail}</span></div>
          </div>
          <form id="user-change" >
            <div className="change">
              <label for="uname">用户名：</label>
              <span>{personal.data.user.uemail}</span>
            </div>
            <div className="change">
              <label for="uname">昵称</label>
              <input type="text"
                name="uname"
                placeholder="昵称"
                id="uname"
                value={personal.data.user.uname}
                onChange={(e) => {
                  fieldChange('uname', e.target.value)
                }}
              />
            </div>
            <div className="change">
              <label for="usex">性别</label>
              <input type="text"
                name="usex" id="usex"
                placeholder="男/女"
                value={personal.data.user.usex}
                onChange={(e) => {
                  fieldChange('usex', e.target.value)
                }}
              />
            </div>
            <div className="change">
              <label for="ubirth">城市</label>
              <input type="text"
                name="ubirth"
                id="ubirth"
                placeholder="如：黑龙江"
                value={personal.data.user.ubirth}
                onChange={(e) => {
                  fieldChange('ubirth', e.target.value)
                }}
              />
            </div>
            <div className="change">
              <label for="utel">电话</label>
              <input type="text"
                name="utel"
                id="utel"
                placeholder="请输入11位移动电话号码"
                value={personal.data.user.utel}
                onChange={(e) => {
                  fieldChange('utel', e.target.value)
                }}
              />
            </div>

            <input type="submit" id="submit" value="提交 修改" className="sub" />
          </form>
        </div>
      </div>
    )
  }
}
export default connect((store) => {
  return {
    personal: store.personal
  }
}, {
    ...actions
  })(PersonalInfo);