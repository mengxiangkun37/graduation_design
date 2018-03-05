import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/search/a_search';
import {
	Link
} from 'react-router-dom';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id
    }
  }
  componentDidMount() {
    this.props.search_Init(this.state.id);
  }
  render() {
    let {
      search,
      getSearch1,
      getSearch2
		} = this.props
    console.log(search.data);
    return (
      <div className='search home'>
        <div className="hmtop">
          <div className="hmtop-top">
            <div className="hmtop-left">
              <a href="login">s</a>
              <a href="reg">[注销]</a>
            </div>
            <div className="hmtop-right">
              <Link to="/home">商城首页</Link>
              <a href="reg" className="person">个人中心</a>
              <a href="reg" className="person">收藏夹</a>
            </div>
          </div>
          <div className="wrap">
            <div className="logo">

            </div>

            <form className="search" action="user/do_sear" method="post">
              <input type="text" name="search" id="input-search" placeholder="搜索" value="" />
              <input type="submit" name="" id="input-sub" value="搜  索" />
            </form>
          </div>
          <div className="nav-table">
            <div className="nav-cont">
              <div className="nav-title">
                全部分类
							</div>
              <a href="reg">商城首页</a>
            </div>
          </div>
          <div className="search-content">
            <div className="search-nav">
              <span
                onClick={()=>{
                  getSearch1(this.state.id);
                  console.log(this.state.id)
                }}
              >由低到高</span>
             <span
              onClick={()=>{
                getSearch2(this.state.id);
                console.log(this.state.id)
              }}
              >由高到低</span>
            </div>
            <ul className="search-con">
              {
                (search.data.goods ?search.data.goods:[]).map((item, i) => {
                  return<li key={i}>
                   <Link to={'/single/'+item.id}><img src={"assets/uploads/"+item.wpic} /></Link>
                    <div className="search-title">{item.wtitle}</div>
                    <div className="search-price">￥{item.wprice}</div>
                    <div className="search-collect">点击图片查看</div>
                  </li>

                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((store) => {
  return {
    search: store.search
  }
}, {
    ...actions
  })(Search);
