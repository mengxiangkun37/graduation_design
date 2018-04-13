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

router.post('/login', async (ctx, next) => {
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

router.get('/home', async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.body = await axios.get('http://localhost/new/user/show_unindex', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return JSON.stringify(response.data);
  }).catch((error) => {
    console.log("错误");
  });
})

router.get('/search/:id', async (ctx, next) => {
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
router.get('/search/lth/:sid', async (ctx, next) => {
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
router.get('/search/byshows/:showsid', async (ctx, next) => {
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
router.get('/search/bytime/:timeid', async (ctx, next) => {
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
router.get('/search/htl/:ssid', async (ctx, next) => {
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
router.get('/single/:id', async (ctx, next) => {
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
router.post('/search/doSearch', async (ctx, next) => {
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

router.post('/personal', async (ctx, next) => {
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



module.exports = router
