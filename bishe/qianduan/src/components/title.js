import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';
class Title extends Component {
    render() {
        return (
            <div>
                 <div className="hmtop">
                    <div className="hmtop-top">
                        <div className="hmtop-left">
                            <a href="login">s</a>
                            <a href="login">[注销]</a>
                        </div>
                        <div className="hmtop-right">
                            <Link to="/home">商城首页</Link>
                            <a href="login" className="person">个人中心</a>
                        </div>
                    </div>
                    <div className="wrap">
                        <form action="" method="post" className="search">
                            <input type="text" name="" id="input-search" placeholder="搜索" />
                            <input type="submit" name="" id="input-sub" value="搜  索" />
                        </form>
                    </div>
                </div>
                <div className="nav-table">
                    <div className="nav-cont">
                        <div className="nav-title">
                            全部分类
		                </div>
                        <a href="login">商城首页</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Title