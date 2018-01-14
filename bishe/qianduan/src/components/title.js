import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <div>
                 <div class="hmtop">
                    <div class="hmtop-top">
                        <div class="hmtop-left">
                            <a href="user/show_personal"></a>
                            <a href="user/show_unindex">[注销]</a>
                        </div>
                        <div class="hmtop-right">
                            <a href="home">商城首页</a>
                            <a href="info" class="person">个人中心</a>
                        </div>
                    </div>
                    <div class="wrap">
                        <form action="user/do_search" method="post" class="search">
                            <input type="text" name="" id="input-search" placeholder="搜索" />
                            <input type="submit" name="" id="input-sub" value="搜  索" />
                        </form>
                    </div>
                </div>
                <div class="nav-table">
                    <div class="nav-cont">
                        <div class="nav-title">
                            全部分类
		                </div>
                        <a href="home">商城首页</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Title