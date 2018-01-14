import React, { Component } from 'react';
class Upload extends Component {
    render() {
        return (
            <div>
                <div class="user-info">
                    <div class="user-title unline">
                        <strong>上传物品</strong>
                        <small>/ Upload Items</small>
                    </div>
                    <div class="user-pic unline">
                        <div class="pic"><img src="assets/images/getAvatar.do.jpg" /></div>
                        <div class="n-name">昵称：<span>s</span></div>
                    </div>
                    <form id="user-change" enctype="multipart/form-data" action="user/addSubmit" method="post">
                        <div class="change">
                            <label for="t">标题</label>
                            <input type="text" id="t" name="wtitle" placeholder="请输入标题" />
                        </div>
                        <div class="change">
                            <label for="b" >类型</label>
                            <select id="b" name="cid">
                                <option value="<?php echo $a->cid ; ?>"></option>
                            </select>
                            <label for="a" >城市</label>
                            <select id="a" name="city">
                                <option value="<?php echo $ccc->id ; ?>">sss</option>
                            </select>
                        </div>
                        <div class="change">
                            <label for="p">价格</label>
                            <input type="text" id="p" name="wprice" placeholder="请输入价格" />
                        </div>
                        <label for="c" >描述</label>
                        <textarea id="c" name="wcon" placeholder="请输入描述内容，描述真实，否则会被强制下架"></textarea>
                        <input  type="file" name="file" size="50" />

                        <input type="submit" id="submit" value="上传 物品" class="sub" />
                    </form>

                </div>

            </div>
        );
    }
}
export default Upload;