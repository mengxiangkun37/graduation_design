import React, { Component } from 'react';

class Search extends Component {
	render() {
		return (
			<div className='search home'>
				<div class="hmtop">
					<div class="hmtop-top">
						<div class="hmtop-left">
							<a href="user/show_personal"></a>
							<a href="user/show_unindex">[注销]</a>
						</div>
						<div class="hmtop-right">
							<a href="user/show_index">商城首页</a>
							<a href="user/show_personal" class="person">个人中心</a>
							<a href="user/show_collect" class="person">收藏夹</a>
						</div>
					</div>
					<div class="wrap">
						<div class="logo">

						</div>

						<form class="search" action="user/do_sear" method="post">
							<input type="text" name="search" id="input-search" placeholder="搜索" value="" />
							<input type="submit" name="" id="input-sub" value="搜  索" />
						</form>
					</div>
					<div class="nav-table">
						<div class="nav-cont">
							<div class="nav-title">
								全部分类
							</div>
							<a href="user/show_index">商城首页</a>
						</div>
					</div>
					<div class="search-content">
						<div class="search-nav">
							<a href="user/do_sea" id="up"><span>由低到高</span></a>
							<a href="user/do_sea"><span>由高到低</span></a>
						</div>
						<ul class="search-con">
							<li>
								<a href="user/show_single?id=<?php echo $s->wid;?>"><img src="assets/uploads" /></a>
								<div class="search-title"></div>
								<div class="search-price"></div>
								<div class="search-collect"></div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
export default Search;