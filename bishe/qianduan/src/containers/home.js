import React, { Component } from 'react';
import img1 from '../assets/images/ss1.jpg';
import img2 from '../assets/images/ss2.jpg';
import img3 from '../assets/images/ss3.jpg';
import img4 from '../assets/images/ss4.jpg';
import Footer from '../components/footer';
import { connect } from 'react-redux';
import * as actions from './../actions/home/a_home';
import {
  Link
} from 'react-router-dom';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOver: false
    }
  }
  componentDidMount() {
    this.props.home_Init();
  }

  render() {
    let {
      home
    } = this.props
    console.log(home.data)
    return (
      <div className='home'>
        <div>
          <div className="hmtop">
            <div className="hmtop-top">
              {
                document.cookie &&
                <div className="hmtop-left">
                  <span>{document.cookie.split(";")[1].split('=')[1]==='null'?'未命名用户':document.cookie.split(";")[1].split('=')[1]}</span>
                  <Link to="home"
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
                  <a href="login">请登录</a>
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
              <form action="" method="post" className="search">
                <input type="text" name="" id="input-search" placeholder="搜索" />
                <input type="submit" name="" id="input-sub" value="搜  索" />
              </form>
            </div>
          </div>
          <div className="nav-table">
            <div className="nav-cont">
              <div className="nav-title">
                全部分类
		          </div>
              <Link to="/home" >商城首页</Link>
            </div>
          </div>
        </div>
        <div className="banner">
          <ul className="banner-nav">
            {
              home.data.goodss.map((item, i) => {
                return <li key={i} className="cata"
                  onMouseOver={() => {
                    this.setState({
                      isOver: item.ccid
                    })
                  }}
                  onMouseOut={() => {
                    this.setState({
                      isOver: false
                    })
                  }}
                >
                  {
                    item.ccname
                  }
                  {<div className={`${'access'} ${this.state.isOver === item.ccid ? 'show' : 'none'}`}>
                    {
                      item.aaa.map((items, j) => {
                        return <div key={j} className="white">
                          <a className="link" href={'search/' + items.cid}>
                            <span>
                              {
                                items.cname
                              }
                            </span>
                          </a>
                        </div>
                      })
                    }
                  </div>
                  }
                </li>
              })
            }
          </ul>
          <ul className="a">
            <li><img src={img1} /></li>
            <li><img src={img2} /></li>
            <li><img src={img3} /></li>
            <li><img src={img4} /></li>
          </ul>
          <div className="l">&lt;</div>
          <div className="r">&gt;</div>
        </div>

        <div className="shopMain">
          <div className="title">
            <div className="title-span">
              <span>热门商品</span>
            </div>
            <div className="title-span2">
              <em className='left'></em>
              <span>更多优惠好货 go></span>
              <em></em>
            </div>
          </div>
          <ul className="goods-list">
            {
              home.data.shows.map((item, i) => {
                return <li key={i} className="goods-line">
                  <div className="goods">
                    <Link to={'/single/' + item.wid}>
                      <img src={require("./../assets/images/" + item.wpic)} alt="" />
                    </Link>
                    <div className="goods-cont">
                      <span> {item.wtitle}</span>
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
    home: store.home
  }
}, {
    ...actions
  })(Home);