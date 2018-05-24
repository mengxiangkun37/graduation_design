import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/personal/a_collection';
class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    this.props.collection_Init();
  }
  render() {
    let {
      collection,
      deleteCollection,
      doBuy
    } = this.props;
    console.log(collection.data.goods)
    return (
      <div>
        <div className="user-info1">
          <div className="user-title unline">
            <strong>购物车</strong>
            <small>/ Shopping Cart</small>
          </div>
          <div className="goods">
            {
              collection.data.goods.map((item, i) => {
                return<div key={i} className="goods-info">
                  <div className="goods-pic">
                    <a href={'/single/' + item.wid}><img src={require("../../assets/images/" + item.aaa[0].wpic)} alt=""  /></a>
                  </div>
                  <div className="goods-con">
                    <p>商品：{item.aaa[0].wtitle}</p>
                    <p>价格：{item.aaa[0].wprice}</p>
                    <p>上架时间：{item.aaa[0].wtime}</p>
                    <p>介绍：{item.aaa[0].wcon}</p>
                    <p>添加数量：{item.cnums}</p>
                  </div>
                  <div className="goods-btn">
                    <span className="btn-left"
                      onClick={()=>{
                        doBuy(item.uid,item.wid,item.cnums);
                        deleteCollection(item.collect_id);
                        alert('购买成功');
                      }}
                    >购买</span>
                    <span href="s" className="btn-right"
                      onClick={()=>{
                        deleteCollection(item.collect_id);
                      }}
                    >删除</span>
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
    collection: store.collection
  }
}, {
    ...actions
  })(Collection);