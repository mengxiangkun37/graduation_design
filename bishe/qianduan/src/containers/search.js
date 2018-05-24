import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/search/a_search';
import {
  Link
} from 'react-router-dom';
import Footer from '../components/footer';
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
      doSearch,
      fieldChange,
      getSearch1,
      getSearch2,
      getSearchByShows,
      getSearchByTime
    } = this.props

    return (
      <div className='search home'>
        <div className="hmtop">
          <div className="hmtop-top">
            {
              document.cookie &&
              <div className="hmtop-left">
                <span>{document.cookie.split(";")[1].split('=')[1]==='null'?'未命名用户':document.cookie.split(";")[1].split('=')[1]}</span>
                <Link to={"/search/" + this.state.id}
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
                <a href="reg" className="person">免费注册</a>
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
            <form className="search">
              <input type="text"
                name="search"
                id="input-search"
                placeholder="搜索"
                value={search.data.search}
                onChange={(e) => {
                  fieldChange('search', e.target.value);
                }}
              />
              <input type="submit"
                name=""
                id="input-sub"
                value="搜  索"
                onClick={(e) => {
                  e.preventDefault();
                  doSearch();
                }}
              />
            </form>
          </div>
        </div>
        <div className="nav-table">
          <div className="nav-cont">
            <div className="nav-title">
              全部分类
							</div>
            <Link to="/home">商城首页</Link>
          </div>
        </div>
        <div className="search-title">
          <div className='title-left'>
            <ul>
              <li
                onClick={() => {
                  getSearchByShows(this.state.id);
                }}
              >销量</li>
              <li
                onClick={() => {
                  getSearch2(this.state.id);

                }}
              >价格从高到低</li>
              <li
                onClick={() => {
                  getSearch1(this.state.id);
                }}
              >价格从低到高</li>
              <li
                onClick={() => {
                  getSearchByTime(this.state.id);
                }}
              >上架时间</li>
            </ul>
          </div>
          <div className='title-right'>
            <span>共{search.data.goods.length}件商品</span>
          </div>
        </div>
        <div className="searchMain">
          <ul className="goods-list">
            {
              (search.data.goods ? search.data.goods : []).map((item, i) => {
                return <li className="goods-line" key={i}>
                  <div className="goods">
                    <Link to={'/single/' + item.wid}><img src={require("./../assets/images/" + item.wpic)} /></Link>
                    <div className="goods-cont">
                      <span>{item.wtitle}</span>
                    </div>
                    <div className="goods-price">
                      <strong>￥{item.wprice}</strong>
                      <span>已售{item.shows}</span>
                    </div>
                  </div>
                </li>
              })
            }

          </ul>
        </div>
        <Footer />
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
