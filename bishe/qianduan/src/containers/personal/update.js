import React, { Component } from 'react';
class Update extends Component {
    render() {
        return (
            <div>
                <div class="user-info">
                    <div class="user-title unline">
                        <strong>更改物品信息</strong>
                        <small>/ Update Items Information</small>
                    </div>
                    <form id="user-change" action="" method="post">
                        <label for="c" className = 'update-style'>地址</label><br/>
                        <textarea id="c" name="wcon" value="" placeholder="请输入收货地址"></textarea>
                        <input type="submit" value="提交 更改" class="sub" />
                    </form>
                </div>
            </div>
        );
    }
}
export default Update;