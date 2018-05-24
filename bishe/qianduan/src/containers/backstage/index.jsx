import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from './order';
import Shops from './shops';
import User from './user';
import {
  Link
} from 'react-router-dom';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 1
    }
  }
  render() {
    return (
      <div className='home personal collect mine admin'>
        <div>
          <div className="admin-home">
            <div className="hmtop-top">
              {
                document.cookie &&
                <div className="hmtop-left">
                  <span>{document.cookie.split(";")[1].split('=')[1]}</span>
                  <a href="login"
                    onClick={(e) => {
                      var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
                      if (keys) {
                        for (var i = keys.length; i--;)
                          document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
                      }
                    }}
                  >[注销]</a>
                </div>
              }
              <div className="hmtop-right">
                <span className="person">欢迎进入系统管理</span>
              </div>
            </div>
          
          </div>
        </div>
        <div className="content">
          <ul className="content-nav">
            <li className="sheet sheet-title unline">系统管理</li>
            <li className="sheet sheet-con"
              onClick={() => {
                this.setState({
                  type: 1
                });
              }}
            >用户管理</li>
            <li className="sheet sheet-con"
              onClick={() => {
                this.setState({
                  type: 2
                });
              }}
            >商品管理</li>
            <li className="sheet sheet-con"
              onClick={() => {
                this.setState({
                  type: 3
                });
              }}
            >订单管理</li>
          </ul>
          <div>
            {
              this.state.type === 1 && <User />
            }
            {
              this.state.type === 2 && <Shops />
            }
            {
              this.state.type === 3 && <Order />
            }
          </div>
        </div>
      </div>

    );
  }
}

export default connect((store) => {
  return {

  }
}, {

  })(Index);
