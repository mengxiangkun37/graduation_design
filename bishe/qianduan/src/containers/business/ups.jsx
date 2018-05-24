import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/business/a_ups'
class Ups extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    this.props.ups_Init();
  }
  render() {
    let {
      ups,
      fieldChange,
      upsGoods
    } = this.props;
    console.log(ups.data.ups)
    ups.data.ups.bid = document.cookie.split(";")[0].split('=')[1];
    return (
      <div>
        <div className="user-info">
          <div className="user-title unline">
            <strong>商品上传</strong>
            <small>/ Commodity uploading</small>
          </div>
          <form id="user-change" >
            <div className="change">
              <label htmlFor="uname">商品名称</label>
              <input type="text"
                name="uname"
                placeholder="请填写商品名称"
                id="uname"
                value={ups.data.ups.wtitle}
                onChange={(e) => {
                  fieldChange('wtitle', e.target.value)
                }}
              />
            </div>
            <div className="change">
              <label htmlFor="ubirth">商品价格</label>
              <input type="text"
                name="ubirth"
                id="ubirth"
                placeholder="请填写价格"
                value={ups.data.ups.wprice}
                onChange={(e) => {
                  fieldChange('wprice', e.target.value)
                }}
              />
            </div>
            <div className="change">
              <label htmlFor="kucun">商品库存</label>
              <input type="text"
                name="kucun"
                id="ubirth"
                placeholder="请填写库存"
                value={ups.data.ups.kucun}
                onChange={(e) => {
                  fieldChange('kucun', e.target.value)
                }}
              />
            </div>
            <div className="change">
              <label htmlFor="utel">商品描述</label>
              <textarea name="utel"
                id="utel"
                cols="30"
                rows="10"
                placeholder="请填写商品描述"
                className='miaoshu'
                value={ups.data.ups.wcon}
                onChange={(e) => {
                  fieldChange('wcon', e.target.value)
                }}
              >
              </textarea>
            </div>
            <div className="change1">
              <label htmlFor="lx">商品类型</label>
              <select id="lx" className='leixing'
                onChange={(e) => {
                  fieldChange('cid', e.target.value)
                }}
              >
                {
                  ups.data.goods.map((item, i) => {
                    return <option key={i}
                      value={item.cid}
                    >{item.cname}</option>
                  })
                }
              </select>
            </div>
            <div className="change-ups">
              <label htmlFor="pic">商品图片</label>
              <input type="file"
                name="pic"
                onChange={(e) => {
                  fieldChange('wpic', e.target.files[0])
                }}
              />
            </div>
            <input
              type="submit"
              id="ups-sub"
              value="提交上传"
              className="sub"
              onClick={(e) => {
                upsGoods();
                e.preventDefault();
              }}
            />
          </form>
        </div>
      </div>
    )
  }
}
export default connect((store) => {
  return {
    ups: store.ups
  }
}, {
    ...actions
  })(Ups);