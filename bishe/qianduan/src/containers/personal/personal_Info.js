import React, { Component } from 'react';
class PersonalInfo extends Component {
    render() {
        return (
            <div>
                <div class="user-info">
                    <div class="user-title unline">
                        <strong>个人信息</strong>
                        <small>/ Personal Information</small>
                    </div>
                    <div class="user-pic unline">
                        <div class="pic"><img src="assets/images/yushen.jpeg" /></div>
                        <div class="n-name">昵称：<span></span></div>
                    </div>
                    <form id="user-change" action="user/do_index" method="post">
                        <div class="change">
                            <label for="">昵称</label>
                            <input type="text" name="uname" placeholder="昵称" id="uname" value="" />
                        </div>
                        <div class="change">
                            <label for="">性别</label>
                            <input type="text" name="usex" id="usex" placeholder="男/女" value="" />
                        </div>
                        <div class="change">
                            <label for="">城市</label>
                            <input type="text" name="ubirth" id="ubirth" placeholder="如：黑龙江" value="" />
                        </div>
                        <div class="change">
                            <label for="">电话</label>
                            <input type="text" name="utel" id="utel" placeholder="请输入11位移动电话号码" value="" />
                        </div>

                        <input type="submit" id="submit" value="提交 修改" class="sub" />
                    </form>
                </div>
            </div>
        )
    }
}
export default PersonalInfo;