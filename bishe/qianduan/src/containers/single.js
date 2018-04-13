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
      id: this.props.match.params.id
    }
  }
  componentDidMount() {
    this.props.getSingle(this.state.id);
  }
  render() {
    let {
      single
    } = this.props

    let dataId = single.data.id[0] || [];
    let dataPl = single.data.pl || [];
    console.log(typeof dataId.wpic)
    console.log(typeof dataId.wpic)
    return (
      <div className='single home'>
        <div className="hmtop">
          <div className="hmtop-top">
            {
              document.cookie &&
              <div className="hmtop-left">
                <span>{document.cookie.split(";")[1].split('=')[1]}</span>
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
                  <Link to="/login" className="person">购物车</Link>
                  <Link to="/login" className="person">收藏夹</Link>
                </div>
              }
              {document.cookie &&
                <div>
                  <Link to="/info" className="person">个人中心</Link>
                  <Link to="/info" className="person">购物车</Link>
                  <Link to="/info" className="person">收藏夹</Link>
                </div>
              }
            </div>
          </div>
          <div className="wrap">
            <div class="logo">
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
          {/* <div className="small">
            <a href="user/do_search">搜索</a>
            <span >/物品详情页</span>
          </div>
          <div className="single-content">
            {
              dataId.wpic &&
              <img src={require("./../assets/images/" + dataId.wpic)} />
            }
            <div className="single-info">
              <div className="single-title">
                {dataId.wtitle}
              </div>
              <div className="single-con">
                <span>卖家昵称：{dataId.uname}</span><br />
                <span>卖家电话：{dataId.utel}</span><br />
                <span>所在城市：{dataId.name}</span><br />
                <span>价格：<span className="spc">￥{dataId.wprice}</span></span><br />
                <span>商品描述：{dataId.wcon}</span>
              </div>
              <a href="user/do_collect?id=<?php echo $i->wid?>" className="col">立即收藏</a>
            </div>

          </div>
          <hr />
          <div className="user_pl">
            <h3 align="center">评论区</h3>
            {
              dataPl.map((item, i) => {
                return <div key={i}>
                  <div>
                    <span>评论人：</span>
                    <span>{item.aaa[0].uname}</span><br />
                  </div>
                  <span>评论时间：</span>
                  <span>{item.pltime}</span><br />
                  <span>评论内容：</span>
                  <span>{item.plcont}</span><br />
                  <br /><br />
                </div>
              })}

          </div>
          <hr />
          <div className="pl">
            <form action="" method='post'>
              <h3>点评：</h3>
              <input type="hidden" name="wid" value="" id="wid" />
              <textarea name="pcont" id="pcont" cols="40" rows="8"></textarea>
              <input type="submit" id='p_btn' value="提交评论" />
            </form>
          </div> */}

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
                    <span className="pj">评价</span>
                    <span className="">5655</span>
                  </div>
                </div>

              </div>
              <div className="buy-col">
                <div className="buy">
                  <span>
                    立即购买
                </span>
                </div>
                <div className="col">
                  <span>
                    加入购物车
                </span>
                </div>
              </div>

            </div>
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
