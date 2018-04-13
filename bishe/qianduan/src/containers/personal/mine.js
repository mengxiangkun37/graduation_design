import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../../components/title';
import PersonalInfo from './personal_Info';
import BuyInfo from './buy_info';
import Update from './update';
import Upload from './upload';
import Collection from './collection';
import {
  Link
} from 'react-router-dom';
class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 1
    }
  }
  render() {
    return (
      <div className='home personal collect mine'>
        <div>
          <div className="hmtop">
            <div className="hmtop-top">
              {
                document.cookie &&
                <div className="hmtop-left">
                  <a href="login">{document.cookie.split(";")[1].split('=')[1]}</a>
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
                <Link to="/home">商城首页</Link>
                <Link to="/info" className="person">尊敬的{document.cookie.split(";")[1].split('=')[1]}您好</Link>
              </div>
            </div>
            <div className="mine-wrap">
              <div className="mine-logo">
                <img src={require('./../../assets/images/logo.png')} alt="" />
              </div>
              <div className="mine-font">
                <Link to="/home">商城首页</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <ul className="content-nav">
            <li className="sheet sheet-title unline">个人中心</li>
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
            >收货地址</li>
            <li className="sheet sheet-con"
              onClick={() => {
                this.setState({
                  type: 4
                });
              }}
            >购物车</li>
            <li className="sheet sheet-con"
              onClick={() => {
                this.setState({
                  type: 5
                });
              }}
            >购买记录</li>
          </ul>
          <div>
            {
              this.state.type === 1 && <PersonalInfo />
            }
            {
              this.state.type === 2 && <Update />
            }
            {
              this.state.type === 4 && <BuyInfo />
            }
            {
              this.state.type === 5 && <Collection />
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

  })(Mine);
