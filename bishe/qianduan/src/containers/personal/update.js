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
                        <div class="change">
                            <label for="t">标题</label>
                            <input type="text" id="t" name="wtitle" value="<?php echo $g->wtitle;?>" placeholder="请输入标题" />
                        </div>
                        <div class="change">
                            <label for="p">价格</label>
                            <input type="text" id="p" name="wprice" value="" placeholder="请输入价格" />
                        </div>
                        <label for="c" className = 'update-style'>描述</label>
                        <textarea id="c" name="wcon" value="" placeholder="请输入描述内容，描述真实，否则会被强制下架"></textarea>
                        <input type="submit" value="提交 更改" class="sub" />
                    </form>
                </div>
            </div>
        );
    }
}
export default Update;