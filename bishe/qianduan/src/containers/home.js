import React, { Component } from 'react';
import img1 from '../assets/images/ss1.jpg';
import img2 from '../assets/images/ss2.jpg';
import img3 from '../assets/images/ss3.jpg';
import img4 from '../assets/images/ss4.jpg';
import Title from '../components/title';
import { connect } from 'react-redux';
import * as actions from './../actions/home/a_home';
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
    console.log(document.cookie)
    return (
      <div className='home'>
        <Title />
        {/* <div className="banner">
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
                  {<div className={`${'access'} ${this.state.isOver ===item.ccid?'show':'none'}`}>
                    {
                      item.aaa.map((items, j) => {
                        return <div key={j} className="white">
                          <a className="link" href={'search/'+ items.cid}>
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
          <div className="shopMain-title">
            <span>某城市</span>
            <span>周边商品</span>
          </div>
        </div> */}
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