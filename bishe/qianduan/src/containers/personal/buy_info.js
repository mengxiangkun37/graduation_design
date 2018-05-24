import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/personal/a_buyinfo';
class BuyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_pl: 2
    }
  }
  componentDidMount() {
    this.props.buyInfo_Init();
  }
  render() {
    let {
      buyInfo,
      deleteBuyInfo,
      fieldChange,
      userPl
    } = this.props;
    console.log(buyInfo.data);
    return (
      <div>
        {this.state.is_pl === 1 &&
          <div className='tanchuce'>
            <div className="tanchuce-close"
              onClick={() => {
                this.setState({
                  is_pl: 2
                })
                buyInfo.data.pl.plcont=''
              }}
            >关闭</div>
            <textarea
              cols="30"
              rows="10"
              placeholder="请输入评论信息"
              value={buyInfo.data.pl.plcont}
              className="tanchuce-pl"
              onChange={(e) => {
                fieldChange('plcont', e.target.value)
              }}
            >
            </textarea>
            <div className="tanchuce-submit"
              onClick={() => {
                if(buyInfo.data.pl.plcont===''){
                  alert('请输入评论内容');
                }else{
                  userPl();
                  this.setState({
                    is_pl: 2
                  })
                  buyInfo.data.pl.plcont=''
                }
              }}
            >提交评论</div>
          </div>
        }
        <div className="user-info1">
          <div className="user-title unline">
            <strong>购买记录</strong>
            <small>/ Purchase history</small>
          </div>
          <div className="goods">
            {
              buyInfo.data.goods.map((item, i) => {
                return <div key={i} className="goods-info">
                  <div className="goods-pic">
                    <a href={'/single/' + item.wid} ><img src={require("../../assets/images/" + item.aaa[0].wpic)} alt="" /></a>
                  </div>
                  <div className="goods-con">
                    <p>商品：{item.aaa[0].wtitle}</p>
                    <p>价格：{item.aaa[0].wprice}</p>
                    <p>购买时间：{item.buytime}</p>
                    <p>介绍：{item.aaa[0].wcon}</p>
                    <p>购买数量：{item.nums}</p>
                  </div>
                  <div className="goods-btn">
                    <span className="btn-left"
                      onClick={() => {
                        this.setState({
                          is_pl: 1
                        })
                        buyInfo.data.pl.wid = item.wid;
                      }}
                    >评论</span>
                    <span className="btn-right"
                      onClick={() => {
                        deleteBuyInfo(item.buyid)
                      }}
                    >删除记录</span>
                  </div>

                </div>
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
export default connect((store) => {
  return {
    buyInfo: store.buyInfo
  }
}, {
    ...actions
  })(BuyInfo);
