import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/single/a_single';
import Footer from '../components/footer';

import {
  Link
} from 'react-router-dom';
class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      type: 0
    }
  }
  componentDidMount() {
    this.props.getSingle(this.state.id);
  }
  render() {
    let {
      single,
      fieldChange,
      doBuy,
      doAdd
    } = this.props
    console.log(single);
    let dataId = single.data.id || [];
    let dataPl = single.data.pl || [];
    console.log(dataId);
    console.log(dataPl);
    return (
      <div className='single home'>
        <div className="hmtop">
          <div className="hmtop-top">
            {
              document.cookie &&
              <div className="hmtop-left">
                <span>{document.cookie.split(";")[1].split('=')[1]==='null'?'未命名用户':document.cookie.split(";")[1].split('=')[1]}</span>
                <Link to={"/single/" + this.state.id}
                  onClick={() => {
                    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
                    if (keys) {
                      for (let i = keys.length; i--;)
                        document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString() + "; path=/";
                    }
                  }}
                >[注销]</Link>
              </div>
            }
            {
              !document.cookie &&
              <div className="hmtop-left">
                <a href="/login">请登录</a>
                <a href="/reg" className="person">免费注册</a>
              </div>
            }
            <div className="hmtop-right">
              {!document.cookie &&
                <div>
                  <Link to="/login" className="person">个人中心</Link>
                </div>
              }
              {document.cookie &&
                <div>
                  <Link to="/info" className="person">个人中心</Link>
                </div>
              }
            </div>
          </div>
          <div className="wrap">
            <div className="logo">
              <img src={require('./../assets/images/logo.png')} alt="" />
            </div>
            <form action="" method="post" className="search">
              <input type="text" name="" id="input-search" placeholder="搜索" />
              <input type="submit" name="" id="input-sub" value="搜  索" />
            </form>
          </div>
          <div className="nav-table">
            <div className="nav-cont">
              <div className="nav-title">
                全部分类
           </div>
              <Link to="/home">商城首页</Link>
            </div>
          </div>

          <div className='single-title'>
            <div className='single-title-cont'>
              <span>首页</span>
              <span>></span>
              <span>商品详情</span>
              <span>></span>
              <span>{dataId.wtitle}</span>
            </div>
          </div>

          <div className="single-content">
            {
              dataId.wpic &&
              <div className="single-content-img">
                <img src={require("./../assets/images/" + dataId.wpic)} />
              </div>

            }
            <div className="single-info">
              <div className="single-title-font">
                {dataId.wtitle}
              </div>
              <div className="single-wcon">
                {dataId.wcon}
              </div>
              <div className="single-con">
                <div className="left">
                  <span>上架时间：</span>
                  <span>{dataId.wtime}</span>
                </div>
                <div className="right">
                  <div>
                    <span>库存</span>
                    <span className="">{dataId.kucun}</span>
                  </div>
                </div>
              </div>
              <div className="single-con">
                <div className="left">
                  <span>价格：</span>
                  <span className="spc">￥{dataId.wprice}</span>
                </div>
                <div className="right">
                  <div>
                    <span>已售</span>
                    <span className="">{dataId.shows}</span>
                  </div>
                </div>

              </div>
              <div className="single-con">
                <div className="left">
                  <span>购买数量：</span>
                  <span className="font"
                    onClick={() => {
                      var a = single.data.nums - 1;
                      if (a < 1) {
                        a = 1;
                        this.setState({
                          type: 1
                        })
                      } else {
                        this.setState({
                          type: 0
                        })
                      }
                      fieldChange('nums', a);
                    }}
                  >-</span>
                  <input
                    type="text"
                    value={single.data.nums}
                  />
                  <span className="font"
                    onClick={() => {
                      var a = single.data.nums + 1;
                      if (a > dataId.kucun) {
                        a = dataId.kucun;
                        this.setState({
                          type: 2
                        })
                      } else {
                        this.setState({
                          type: 0
                        })
                      }
                      fieldChange('nums', a);
                    }}
                  >+</span>
                </div>
                {
                  this.state.type === 1 &&
                  <div className="right">
                    <span className="red">所选商品数量不能小于1</span>
                  </div>
                }
                {
                  this.state.type === 2 &&
                  <div className="right">
                    <span className="red">所选商品数量不能大于库存</span>
                  </div>
                }
              </div>
              {
                !document.cookie && <div className="buy-col">
                  <Link className="buy" to="/login">
                    立即购买
                    </Link>
                  <Link className="col" to="/login">
                    加入购物车
                    </Link>
                </div>
              }

              {
                document.cookie && <div className="buy-col">
                  <div className="buy"
                    onClick={() => {
                      doBuy(document.cookie.split(";")[0].split('=')[1], dataId.wid, single.data.nums);
                      alert('购买成功');
                    }}
                  >
                    <span>
                      立即购买
                  </span>
                  </div>
                  <div className="col"
                    onClick={() => {
                      doAdd(document.cookie.split(";")[0].split('=')[1], dataId.wid, single.data.nums);

                    }}
                  >
                    <span>
                      加入购物车
                     </span>
                  </div>
                </div>
              }
            </div>
          </div>
          <div className="single-pl-all">
            <h3 className="single-pl-title">评论信息</h3>
            {
              dataPl.map((item, i) => {
               return <div key={i} className="single-pl">
                  <span>{item.pltime}</span>&nbsp;&nbsp;
                  <span>{item.aaa[0]===undefined?'匿名':item.aaa[0].uname}</span>：&nbsp;&nbsp;
                  <span>{item.plcont}</span>
                </div>
              })
            }
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect((store) => {
  return {
    single: store.single
  }
}, {
    ...actions
  })(Single);
