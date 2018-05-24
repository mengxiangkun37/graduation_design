import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/backstage/a_shops';
class Shops extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    this.props.Shops_Init()
  }
  render() {
    let {
      shops,
      deleteShops
    } = this.props;
    console.log(shops.data)
    return (
      <div>
        <div className="user-info1">
          <div className="user-title unline">
            <strong>商品管理</strong>
            <small>/ Commodity management</small>
          </div>
          <div className="user-users">
            <table className="user-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <th>商品id</th>
                  <th>价格</th>                  
                  <th>上架时间</th>
                  <th>售出数量</th>
                  <th>库存</th>
                  <th>操作</th>
                </tr>
                {
                  shops.data.map((item, i) => {
                    return <tr key={i}>
                      <td>{item.wtitle}</td>
                      <td>{item.wid}</td>
                      <td>{item.wprice}</td>
                      <td>{item.wtime}</td>
                      <td>{item.shows}</td>
                      <td>{item.kucun}</td>
                      <td className="td"
                        onClick={()=>{
                          deleteShops(item.wid);
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
    shops: store.shops
  }
}, {
    ...actions
  })(Shops);
