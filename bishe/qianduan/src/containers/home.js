import React, { Component } from 'react';
import img1 from '../assets/images/ss1.jpg';
import img2 from '../assets/images/ss2.jpg';
import img3 from '../assets/images/ss3.jpg';
import img4 from '../assets/images/ss4.jpg';
import Title from '../components/title';
class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Title/>
        <div class="banner">
          <ul class="banner-nav">

            <li class="cata">
              <div class="access none">

                <div class="white">
                  <a class="link" href="user/show_login">
                    <span></span>
                  </a>
                </div>

              </div>
            </li>

          </ul>
          <ul class="a">
            <li><img src={img1} /></li>
            <li><img src={img2} /></li>
            <li><img src={img3} /></li>
            <li><img src={img4} /></li>
          </ul>

          <div class="l">&lt;</div>
          <div class="r">&gt;</div>
        </div>

        <div class="shopMain">
          <div class="shopMain-title">

            <span>某城市</span>

            <span>周边商品</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;