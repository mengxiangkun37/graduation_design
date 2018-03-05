import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/single/a_single';
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
    console.log(dataPl)
    return (
      <div className='single home'>
        <div className="hmtop">
          <div className="hmtop-top">
            <div className="hmtop-left">
              <a href="user/show_personal"></a>
              <a href="user/show_unindex">[注销]</a>
            </div>
            <div className="hmtop-right">
              <a href="user/show_index">商城首页</a>
              <a href="user/show_personal" className="person">个人中心</a>
              <a href="user/show_collect" className="person">收藏夹</a>
            </div>
          </div>
          <div className="wrap">
            <div className="logo">

            </div>
            <form className="search" action="user/do_search" method="post">
              <input type="text" name="" id="input-search" placeholder="搜索" />
              <input type="submit" name="" id="input-sub" value="搜  索" />
            </form>
          </div>
          <div className="nav-table">
            <div className="nav-cont">
              <div className="nav-title">
                全部分类
           </div>
              <a href="user/show_index">商城首页</a>
            </div>
          </div>
          <div className="small">
            <a href="user/do_search">搜索</a>
            <span >/物品详情页</span>
          </div>
          <div className="single-content">

            <img src="assets/uploads/<?php echo $i->wpic;?>" />
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
          </div>
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
