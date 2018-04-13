import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="footer-cont">
            <div className="footer-part">
              <div>
                <span>友情链接：</span>
                <a href="https://www.taobao.com/" target="view_window"><span>淘宝商城</span></a>
                <a href="https://www.jd.com/" target="view_window"><span>京东商城</span></a>
                <a href="https://www.gome.com.cn/" target="view_window"><span>国美家电</span></a>
                <a href="https://www.suning.com/" target="view_window"><span>苏宁易购</span></a>
                <a href="https://www.ikea.cn" target="view_window"><span>宜家</span></a>
                <a href="http://www.meilele.com" target="view_window"><span>美乐乐家具</span></a>
                <a href="http://www.yhd.com/" target="view_window"><span>1号店</span></a>
                <a href="http://www.dangdang.com" target="view_window"><span>当当商城</span></a>
                <a href="http://mall.haval.com.cn/" target="view_window"><span>哈弗商城</span></a>
                <a href="https://www.tmall.com/" target="view_window"><span>天猫商城</span></a>
                <a href="http://www.lab360.cn/" target="view_window"><span>来宝商城</span></a>
                <a href="https://www.vip.com/" target="view_window"><span>唯品会</span></a>
                <a href="http://www.cctvmall.com/" target="view_window"><span>央视网商城</span></a>
              </div>
            </div>
            <div className="footer-part2">
              <div>
                <span>黑龙江大学毕业设计：</span>
                <span>家居饰品商城</span>
              </div>
              <div className="footer-part2-last">
                <div className="part1">
                  <span>作者：</span>
                  <span>孟祥坤</span>
                </div>
                <div className="part2">
                  <span>指导教师：</span>
                  <span>常城</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer