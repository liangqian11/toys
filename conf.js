// ---------------------------------------------------------------------------- Package
const _ = require('lodash')
const mysql = require('mysql')
// ---------------------------------------------------------------------------- Port
const port = 3000
// ---------------------------------------------------------------------------- Common
const common = {
  encrypt: {
    deskey: 'KWes6(ken9!d5478w2(*#12!'
  },
  exception: {
    mail: [],
    mobile: []
  },
  router: {
    dir: process.cwd() + '/router',
    ext: ['.js'],
    exclude: []
  },
  upload: {
    rule: {
      head:  {project: 'xiongan',  category: 'head',   max: 1024000, type: 'img', maxHeight:500 },
      company:  {project: 'xiongan',  category: 'company',   max: 1024000, type: 'img', maxHeight:500 }
    }
  },
  aliyun: {
    accessKey: 'xxxxxx',
    accessSecret: 'xxxxxx',
    oss: {
      region: 'oss-cn-shanghai',
      bucket: 'hoss-upload'
    }
  }
}
// ---------------------------------------------------------------------------- Special
const conf = {
  development: {
    accept:         "http://localhost",
    uppath:         "c:\\uptemp",
    session: {
      redis: {
        host:       "localhost",
        port:       6379
      },
      domain:       '192.168.0.98',
      path:         '/',
    },
    mysql: {
      main: {
        host:       "192.168.0.96",
        user:       "root",
        password:   "123456",
        database:   "xiongan"
      },
      user: {
        host:       "192.168.0.96",
        user:       "root",
        password:   "123456",
        database:   "he_user"
      }
    },
    redis: {
      host:       "localhost",
      port:       6379
    },
    wechat: {
      appid:        "xxxxxx",
      appsecret:    "xxxxxx",
      scope:        "snsapi_userinfo",
      jsapi_domain: "http://shop.plat.hesq.com.cn/",
      mch_id:       "1232291902",
      key:          "f44773bf001fe9328beab30f1b9640ad",
      notify_url:   "http://hrest.ngrok.cc/wepay/notify",
      trade_type:   "JSAPI"
    },
    extend:{
      shortmsg:{
        url:'http://120.55.197.77:1210/Services/MsgSend.asmx' + "/SendMsg",
        userCode:'BDHSQCF',
        userPass:'BDHSQabc123',
      },
      wxmsg:{
        template:{
          pieces:'zKkNMWcYOq28CkJlu9wKHVBmI7VYrEJc0mOovB9YlYo',
          pickup:'Di-0MHSF8eoL1PiR6f2SJVKWRrXeCxyQvnPmuQMZNio',
          overtime:'DTL-Up6xE5DRVbScsgas8eFDVNTBgN9kpJZlPLbPd0Q',
        }
      },
      mail:{
        userName:'1101200921@qq.com',
        userPass:'wdtxeioigwpfjbjb',
      }
    },
  },
  // -------------------------------------------------------------------------- Pro
  production: {
    accept:         "http://xiongan.tset.hesq.com.cn",
    uppath:         "/www/xiongan/image",
    session: {
      redis: {
        host:       "127.0.0.1",
        port:       6379
      },
      domain:       'http://xiongan.tset.hesq.com.cn',
      path:         '/',
    },
    mysql: {
      main: {
        host:       "127.0.0.1",
        user:       "root",
        password:   "123456",
        database:   "xiongan"
      },
      user: {
        host:       "127.0.0.1",
        user:       "root",
        password:   "123456",
        database:   "he_user"
      }
    },
    redis: {
      host:       "127.0.0.1",
      port:       6379
    },
    wechat: {
      appid:        "xxxxxx",
      appsecret:    "xxxxxx",
      scope:        "snsapi_userinfo",
      jsapi_domain: "http://shop.plat.hesq.com.cn/",
      mch_id:       "1232291902",
      key:          "f44773bf001fe9328beab30f1b9640ad",
      notify_url:   "http://hrest.ngrok.cc/wepay/notify",
      trade_type:   "JSAPI"
    },
    extend:{
      shortmsg:{
        url:'http://120.55.197.77:1210/Services/MsgSend.asmx' + "/SendMsg",
        userCode:'BDHSQCF',
        userPass:'BDHSQabc123',
      },
      wxmsg:{
        template:{
          pieces:'zKkNMWcYOq28CkJlu9wKHVBmI7VYrEJc0mOovB9YlYo',
          pickup:'Di-0MHSF8eoL1PiR6f2SJVKWRrXeCxyQvnPmuQMZNio',
          overtime:'DTL-Up6xE5DRVbScsgas8eFDVNTBgN9kpJZlPLbPd0Q',
        }
      },
      mail:{
        userName:'1101200921@qq.com',
        userPass:'wdtxeioigwpfjbjb',
      }
    },
  }
}
// ---------------------------------------------------------------------------- Env
process.env.NODE_ENV = 'development'
let env = process.env.NODE_ENV === 'development' ? 'development' : 'production'
// ---------------------------------------------------------------------------- Exports
module.exports = _.merge({port}, common, conf[env])