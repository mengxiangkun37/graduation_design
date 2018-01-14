import React, { Component } from 'react';
class BuyInfo extends Component {
    render() {
        return (
            <div>
                <div class="user-info1">
                    <div class="user-title unline">
                        <strong>购买记录</strong>
                        <small>/ Purchase record</small>
                    </div>
                    <div class="goods">
                        <div class="goods-info">
                            <div class="goods-pic">
                                <a href="user/show_single?id=<?php echo $aaa->wid;?>" ><img src="assets/uploads/"/></a>
                            </div>
                            <div class="goods-con">
                                <p>标题：2</p>
                                <p>价格：3</p>
                                <p>描述：3</p>
                            </div>
                            <div class="goods-btn">
                                <a href="user/do_delete_collect1?id=<?php echo $a->wid;?>">删除记录</a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default BuyInfo;