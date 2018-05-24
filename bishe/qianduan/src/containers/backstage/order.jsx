import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/backstage/a_order';
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    this.props.Order_Init();    
  }
  render() {
    let {
      order,
      deleteOrders
    } = this.props;
    console.log(order)
    return (
      <div>
        <div className="user-info1">
          <div className="user-title unline">
            <strong>订单管理</strong>
            <small>/ Order management</small>
          </div>
          <div className="user-users">
            <table className="user-table">
            <tbody>
                <tr>
                  <th>订单id</th>
                  <th>商品名</th>
                  <th>购买人</th>
                  <th>购买时间</th>
                  <th>购买数量</th>
                  <th>库存</th>
                  <th>操作</th>
                </tr>
                {
                 order.data.userAgoods.map((item, i) => {
                    return <tr key={i}>
                      <td>{item.buyid}</td>
                      <td>{item.bbb===null?'':item.bbb.wtitle}</td>
                      <td>{item.aaa===null?'':item.aaa.uname}</td>
                      <td>{item.buytime}</td>
                      <td>{item.nums}</td>
                      <td>{item.bbb===null?'':item.bbb.kucun}</td>
                      <td className="td"
                        onClick={()=>{
                          deleteOrders(item.buyid);
                        }}
                      >删除</td>
                    </tr>
                  })
                }
                
              </tbody>
             
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default connect((store) => {
  return {
    order:store.order
  }
}, {
    ...actions
  })(Order);
