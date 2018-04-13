import React, { Component } from 'react';
class Collection extends Component {
    render() {
        return (
            <div>
                <div class="user-info1">
                    <div class="user-title unline">
                        <strong>收藏夹</strong>
                        <small>/ Collection</small>
                    </div>
                    <div class="goods">
                        <div class="goods-info">
                            <div class="goods-pic">
                                <a href="user/show_single?id=<?php echo $a->wid;?>"><img src="assets/uploads/<?php echo $a->wpic?>" /></a>
                            </div>
                            <div class="goods-con">
                                <p>类型：2</p>
                                <p>价格：2</p>
                                <p>城市：2</p>
                                <p>标题：2></p>
                                <p>内容：2</p>
                            </div>
                            <div class="goods-btn">
                                <a href="s" className="btn-left">购买</a>
                                <a href="s"className="btn-left">删除</a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default Collection;