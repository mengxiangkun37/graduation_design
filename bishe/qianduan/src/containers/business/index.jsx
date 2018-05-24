import React, { Component } from 'react';
import { connect } from 'react-redux';
import Per from './per';
import Buys from './buys';
import Ups from './ups';
import {
  Link
} from 'react-router-dom';
class bIndex extends Component {
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
                  <span>{document.cookie.split(";")[1].split('=')[1]==='null'?'未命名商家':document.cookie.split(";")[1].split('=')[1]}</span>
                  <a href="login"
                    onClick={(e) => {
                      var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
                      if (keys) {
                        for (var i = keys.length; i--;)
                        document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString() + "; path=/";
                      }
                    }}
                  >[注销]</a>
                </div>
              }
              <div className="hmtop-right">
                <span className="person">欢迎进入商家系统</span>
              </div>
            </div>
          
          </div>
        </div>
        <div className="content">
          <ul className="content-nav">
            <li className="sheet sheet-title unline">商家管理</li>
            <li className="sheet sheet-con"
              onClick={() => {
                this.setState({
                  type: 1
                });
              }}
            >个人信息</li>
            <li className="sheet sheet-con"
              onClick={() => {
                this.setState({
                  type: 2
                });
              }}
            >商品上传</li>
            <li className="sheet sheet-con"
              onClick={() => {
                this.setState({
                  type: 3
                });
              }}
            >我的商品</li>
          </ul>
          <div>
            {
              this.state.type === 1 && <Per />
            }
            {
              this.state.type === 2 && <Ups />
            }
            {
              this.state.type === 3 && <Buys />
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

  })(bIndex);
