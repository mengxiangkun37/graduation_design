const axios = require('axios')
const router = require('koa-router')()
const qs = require('qs');
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.body = await axios.get('http://127.0.0.1/textdemo/demo.php').then((response) => {
    return JSON.stringify(response.data);
  })
})
router.get('/json', async (ctx, next) => {
  ctx.body = ctx;
})

router.post('/check', async (ctx, next) => {                        //注册查重
  ctx.set("Access-Control-Allow-Origin", "*");
  let email = ctx.request.body.uemail;
  console.log(email);
  ctx.body = await axios.post('http://127.0.0.1/new/user/check', qs.stringify({ email: email}), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})
router.post('/reg', async (ctx, next) => {                        //注册
  ctx.set("Access-Control-Allow-Origin", "*");
  let email = ctx.request.body.uemail;
  let pwd = ctx.request.body.upass;
  ctx.body = await axios.post('http://127.0.0.1/new/user/doReg', qs.stringify({ email: email, pwd: pwd }), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})

router.post('/login', async (ctx, next) => {                        //登录
  ctx.set("Access-Control-Allow-Origin", "*");
  let email = ctx.request.body.uemail;
  let pwd = ctx.request.body.upass;
  ctx.body = await axios.post('http://127.0.0.1/new/user/do_login', qs.stringify({ email: email, pwd: pwd }), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})

router.get('/home', async (ctx, next) => {                       //主页
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.body = await axios.get('http://127.0.0.1/new/user/show_unindex', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})

router.get('/search/:id', async (ctx, next) => {                      //搜索
  ctx.set("Access-Control-Allow-Origin", "*");
  let id = ctx.params.id;
  ctx.body = await axios.get('http://127.0.0.1/new/user/do_search/?id='+id, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})
router.get('/search/lth/:sid', async (ctx, next) => {                        //价格
  ctx.set("Access-Control-Allow-Origin", "*");
  let sid = ctx.params.sid;
  ctx.body = await axios.get('http://127.0.0.1/new/user/do_search/?sid='+sid, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})
router.get('/search/byshows/:showsid', async (ctx, next) => {                 //销量
  ctx.set("Access-Control-Allow-Origin", "*");
  let showsid = ctx.params.showsid;
  ctx.body = await axios.get('http://127.0.0.1/new/user/do_search/?showsid='+showsid, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})
router.get('/search/bytime/:timeid', async (ctx, next) => {                   //时间
  ctx.set("Access-Control-Allow-Origin", "*");
  let timeid = ctx.params.timeid;
  ctx.body = await axios.get('http://127.0.0.1/new/user/do_search/?timeid='+timeid, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})
router.get('/search/htl/:ssid', async (ctx, next) => {                  //价格
  ctx.set("Access-Control-Allow-Origin", "*");
  let ssid = ctx.params.ssid;
  ctx.body = await axios.get('http://127.0.0.1/new/user/do_search/?ssid='+ssid, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})
router.get('/single/:id', async (ctx, next) => {                    //商品详情
  ctx.set("Access-Control-Allow-Origin", "*");
  let id = ctx.params.id;
  ctx.body = await axios.get('http://127.0.0.1/new/user/show_single/?id='+id, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})
router.post('/single/buy', async (ctx, next) => {  //购买商品
  ctx.set("Access-Control-Allow-Origin", "*");
  let uid = ctx.request.body.uid;
  let wid = ctx.request.body.wid;
  let nums = ctx.request.body.nums;
  console.log('uid');
  ctx.body = await axios.post('http://127.0.0.1/new/user/doBuy', qs.stringify({uid: uid, wid: wid ,nums:nums}), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})
router.post('/single/add', async (ctx, next) => {  //添加购物车
  ctx.set("Access-Control-Allow-Origin", "*");
  let uid = ctx.request.body.uid;
  let wid = ctx.request.body.wid;
  let cnums = ctx.request.body.cnums;
  console.log('uid');
  ctx.body = await axios.post('http://127.0.0.1/new/user/doAdd', qs.stringify({uid: uid, wid: wid ,cnums:cnums}), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})

router.post('/search/doSearch', async (ctx, next) => {                //搜索内容
  ctx.set("Access-Control-Allow-Origin", "*");
  let search = ctx.request.body.search;
  console.log(search);
  console.log(search);
  ctx.body = await axios.post('http://127.0.0.1/new/user/do_sear',qs.stringify({search:search}), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})

router.post('/personal', async (ctx, next) => {                   //个人信息
  ctx.set("Access-Control-Allow-Origin", "*");
  let uid = ctx.request.body.uid;
  console.log(uid)
  ctx.body = await axios.post('http://127.0.0.1/new/user/show_personal',qs.stringify({id:uid}), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})

router.post('/changePersonal', async (ctx, next) => {                   //修改个人信息
  ctx.set("Access-Control-Allow-Origin", "*");
  let uid = ctx.request.body.uid;
  let uname = ctx.request.body.uname;
  let usex = ctx.request.body.usex; 
  let ubirth = ctx.request.body.ubirth;
  let utel = ctx.request.body.utel; 
  console.log(ctx.request.body)
  ctx.body = await axios.post('http://127.0.0.1/new/user/changePersonal',qs.stringify({uid:uid,uname:uname,usex:usex,ubirth:ubirth,utel:utel}), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})

router.post('/collection', async (ctx, next) => {                   // 个人信息中购物车
  ctx.set("Access-Control-Allow-Origin", "*");
  let uid = ctx.request.body.uid;
  console.log(uid)
  ctx.body = await axios.post('http://127.0.0.1/new/user/getCollection',qs.stringify({id:uid}), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})

router.post('/deleteCollection', async (ctx, next) => {                   // 个人信息删除购物车
  ctx.set("Access-Control-Allow-Origin", "*");
  let id = ctx.request.body.id;
  ctx.body = await axios.post('http://127.0.0.1/new/user/deleteCollection',qs.stringify({id:id}), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})

router.post('/buyinfo', async (ctx, next) => {                   // 个人信息中购买记录
  ctx.set("Access-Control-Allow-Origin", "*");
  let uid = ctx.request.body.uid;
  console.log(uid)
  ctx.body = await axios.post('http://127.0.0.1/new/user/getBuyinfo',qs.stringify({id:uid}), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})

router.post('/deleteBuyInfo', async (ctx, next) => {                   // 个人信息删除购买记录
  ctx.set("Access-Control-Allow-Origin", "*");
  let id = ctx.request.body.id;
  ctx.body = await axios.post('http://127.0.0.1/new/user/deleteBuyInfo',qs.stringify({id:id}), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})

//系统管理
router.get('/shops', async (ctx, next) => {                        //shops
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.body = await axios.get('http://127.0.0.1/new/user/getShops', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})

router.get('/users', async (ctx, next) => {                        //user
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.body = await axios.get('http://127.0.0.1/new/user/getUsers', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})

router.get('/orders', async (ctx, next) => {                        //orders
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.body = await axios.get('http://127.0.0.1/new/user/getOrders', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})

router.post('/deleteusers', async (ctx, next) => {                   // 系统管理删除用户
  ctx.set("Access-Control-Allow-Origin", "*");
  let id = ctx.request.body.id;
  ctx.body = await axios.post('http://127.0.0.1/new/user/deleteUsers',qs.stringify({id:id}), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})

router.post('/deleteshops', async (ctx, next) => {                   // 系统管理删除商品
  ctx.set("Access-Control-Allow-Origin", "*");
  let id = ctx.request.body.id;
  ctx.body = await axios.post('http://127.0.0.1/new/user/deleteShops',qs.stringify({id:id}), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})

router.post('/deleteorders', async (ctx, next) => {                   // 系统管理删除订单
  ctx.set("Access-Control-Allow-Origin", "*");
  let id = ctx.request.body.id;
  ctx.body = await axios.post('http://127.0.0.1/new/user/deleteOrders',qs.stringify({id:id}), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})
//商家模块
router.post('/per', async (ctx, next) => {                   //商家个人信息
  ctx.set("Access-Control-Allow-Origin", "*");
  let bid = ctx.request.body.bid;
  ctx.body = await axios.post('http://127.0.0.1/new/user/show_per',qs.stringify({id:bid}), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})
router.post('/changePer', async (ctx, next) => {                   //修改商家个人信息
  ctx.set("Access-Control-Allow-Origin", "*");
  let bid = ctx.request.body.bid;
  let bname = ctx.request.body.bname;
  let bcity = ctx.request.body.bcity;
  let btel = ctx.request.body.btel; 
  console.log(ctx.request.body)
  ctx.body = await axios.post('http://127.0.0.1/new/user/changePer',qs.stringify({bid:bid,bname:bname,bcity:bcity,btel:btel}), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})
router.post('/buys', async (ctx, next) => {                   // 我的商品
  ctx.set("Access-Control-Allow-Origin", "*");
  let bid = ctx.request.body.bid;
  console.log(bid)
  ctx.body = await axios.post('http://127.0.0.1/new/user/buys',qs.stringify({id:bid}), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})
router.post('/upsGoods', async (ctx, next) => {                   //修改商家个人信息
  ctx.set("Access-Control-Allow-Origin", "*");
  console.log(ctx.request.body);
  let bid = ctx.request.body.bid;
  let wtitle = ctx.request.body.wtitle;
  let wcon = ctx.request.body.wcon;
  let wprice = ctx.request.body.wprice; 
  let wpic = ctx.request.body.wpic; 
  let kucun = ctx.request.body.kucun; 
  
  ctx.body = await axios.post('http://127.0.0.1/new/user/upsGoods',qs.stringify({bid:bid,wtitle:wtitle,wcon:wcon,wprice:wprice,wpic:wpic,kucun:kucun}), {
    headers: {
      'Content-Type':  'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})


module.exports = router
