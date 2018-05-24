import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/business/a_buys';
class Buys extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    this.props.Buys_Init();    
  }
  render() {
    let {
      buys
    } = this.props;
    console.log(buys)
    return (
      <div>
        <div className="user-info1">
          <div className="user-title unline">
            <strong>我的商品</strong>
            <small>/ My goods</small>
          </div>
          <div className="user-users">
            <table className="user-table">
            <tbody>
                <tr>
                  <th>商品id</th>
                  <th>商品名</th>
                  <th>价格</th>
                  <th>上传时间</th>
                  <th>销售数量</th>
                  <th>库存</th>
                </tr>
                {
                 buys.data.buys.map((item, i) => {
                    return <tr key={i}>
                      <td>{item.wid}</td>
                      <td>{item.wtitle}</td>
                      <td>{item.wprice}</td>
                      <td>{item.wtime}</td>
                      <td>{item.shows}</td>
                      <td>{item.kucun}</td>
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
    buys:store.buys
  }
}, {
    ...actions
  })(Buys);
