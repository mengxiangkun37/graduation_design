import React, { Component } from 'react';
import Title from '../../components/title';
import PersonalInfo from './personal_Info';
import BuyInfo from './buy_info';
import Update from './update';
import Upload from './upload';
import Collection from './collection';
class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {
          type:1
        }
      }
    render() {
        return (
            <div className='home personal collect'>
                <Title/>
                <div className="content">
                    <ul className="content-nav">
                        <li className="sheet sheet-title unline">个人中心</li>
                        <li className="sheet sheet-con"
                            onClick ={()=>{
                                this.setState({
                                    type:1
                                });
                            }}
                        >个人信息</li>
                        <li className="sheet sheet-con"
                            onClick ={()=>{
                                this.setState({
                                    type:2
                                });
                            }}
                        >个人物品</li>
                        <li className="sheet sheet-con"
                             onClick ={()=>{
                                this.setState({
                                    type:3
                                });
                            }}
                        >上传物品</li>
                        <li className="sheet sheet-con"
                            onClick ={()=>{
                                this.setState({
                                    type:4
                                });
                            }}
                        >购买记录</li>
                        <li className="sheet sheet-con"
                            onClick ={()=>{
                                this.setState({
                                    type:5
                                });
                            }}
                        >收藏夹</li>
                    </ul>
                    {
                        this.state.type === 1 && <PersonalInfo/>
                    }
                    {
                        this.state.type === 2 && <Update/>
                    }
                    {
                        this.state.type === 3 && <Upload/>
                    }
                    {
                        this.state.type === 4 && <BuyInfo/>
                    }
                    {
                        this.state.type === 5 && <Collection/>
                    }
                </div>
            </div>

        );
    }
}

export default Mine;