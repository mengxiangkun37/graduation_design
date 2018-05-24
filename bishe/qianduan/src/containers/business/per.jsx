import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/business/a_per';
class Per extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    this.props.per_Init();
  }
  render() {
    let {
      per,
      fieldChange,
      changePer
    } = this.props;
    console.log(document.cookie.split(";")[0].split('=')[1]);
    return (
      <div>
        <div className="user-info">
          <div className="user-title unline">
            <strong>个人信息</strong>
            <small>/ Personal Information</small>
          </div>
          <div className="user-pic unline">
            <div className="pic"><img src={require("./../../assets/images/s1.jpg")} /></div>
            <div className="n-name">商家账号：<span>{per.data.per.bemail}</span></div>
          </div>
          <form id="user-change" >
            <div className="change">
              <label htmlFor="uname">商家账号：</label>
              <span>{per.data.per.bemail}</span>
            </div>
            <div className="change">
              <label htmlFor="uname">姓名</label>
              <input type="text"
                name="uname"
                placeholder="请填写姓名"
                id="uname"
                value={per.data.per.bname?per.data.per.bname:''}
                onChange={(e) => {
                  fieldChange('bname', e.target.value)
                }}
              />
            </div>
            <div className="change">
              <label htmlFor="ubirth">城市</label>
              <input type="text"
                name="ubirth"
                id="ubirth"
                placeholder="如：黑龙江"
                value={per.data.per.bcity?per.data.per.bcity:''}
                onChange={(e) => {
                  fieldChange('bcity', e.target.value)
                }}
              />
            </div>
            <div className="change">
              <label htmlFor="utel">电话</label>
              <input type="text"
                name="utel"
                id="utel"
                placeholder="请输入11位移动电话号码"
                value={per.data.per.btel?per.data.per.btel:''}
                onChange={(e) => {
                  fieldChange('btel', e.target.value)
                }}
              />
            </div>

            <input
              type="submit"
              id="submit"
              value="提交 修改"
              className="sub"
              onClick={(e)=>{
                changePer();
                e.preventDefault();
              }}
            />
          </form>
        </div>
      </div>
    )
  }
}
export default connect((store) => {
  return {
    per: store.per
  }
}, {
    ...actions
  })(Per);