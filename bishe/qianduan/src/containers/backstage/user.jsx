import React, { Component } from 'react';
import { connect } from 'react-redux';
import { access } from 'fs';
import * as actions from './../../actions/backstage/a_user';
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    this.props.User_Init()
  }
  render() {
    let {
      user,
      deleteUsers
    } = this.props;
    console.log(user)
    return (
      <div>
        <div className="user-info1">
          <div className="user-title unline">
            <strong>用户管理</strong>
            <small>/ user management</small>
          </div>
          <div className="user-users">
            <table className="user-table">
              <tbody>
                <tr>
                  <th>账号</th>
                  <th>用户名</th>
                  <th>性别</th>
                  <th>电话号</th>
                  <th>城市</th>
                  <th>操作</th>
                </tr>
                {
                  user.data.map((item, i) => {
                    return <tr key={i}>
                      <td>{item.uemail}</td>
                      <td>{item.uname}</td>
                      <td>{item.usex}</td>
                      <td>{item.utel}</td>
                      <td>{item.ubirth}</td>
                      <td className="td"
                        onClick={()=>{
                          deleteUsers(item.uid);
                        }}
                      >删除</td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default connect((store) => {
  return {
    user: store.user
  }
}, {
    ...actions
  })(User);
