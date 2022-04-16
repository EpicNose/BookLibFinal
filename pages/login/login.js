//login.js 登录
//获取应用实例
var app = getApp()
Page({
    data: {
        motto: '欢 迎 来 到 BookShare！',
        userInfo: {},
        rawData:'',
        encryptedData:'',
        iv:'',
        signature:''

    },
    //事件处理函数
    onLoad: function () {
        wx.getSetting({
          success: (res)=>{
            console.log(res)
          },
          fail: ()=>{},
          complete: ()=>{}
        });


        // var that = this
        // //调用应用实例的方法获取全局数据
        // app.getUserInfo(function (userInfo) {
        //     //更新数据
        //     console.log(userInfo)
        //     that.setData({
        //         userInfo: userInfo
        //     })
        // })

        
    },
    onReady: function () {

    },
    login: function () {
        wx.login({
            success (res) {
              if (res.code) {
                  console.log(res.code)


                  
                //发起网络请求
                // wx.request({
                //   url: 'https://example.com/onLogin',
                //   data: {
                //     code: res.code
                //   }
                // })
              } else {
                console.log('登录失败！' + res.errMsg)
              }
            }
          })
    },
    GetUserInfo(e) {
      var that=this;
           wx.getUserProfile({
             desc:'正在获取',//不写不弹提示框
             success:function(res){
              //console.log(res.rawData)
              that.setData({
                userInfo:res.userInfo,
                rawData:res.rawData,
                iv:res.iv,
                signature:res.signature,
                encryptedData:res.encryptedData
              })


           //    this.data.userInfo=res.userInfo
               console.log('获取成功: ',res)
             },
             fail:function(err){
              console.log("获取失败: ",err)
            }
          })
    },
    GetSession:function(){
      var that=this;
      wx.login({
        success: function(login_res) {
          console.log("aaaa")
          console.log(login_res.code)
          //console.log(that.data.userInfo.rawData)
          //获取用户信息
          // wx.getUserProfile({
            // success: function(info_res) {
             // console.log("up获取成功了")
              // 2. 小程序通过wx.request()发送code到开发者服务器
              wx.request({
                url: 'http://localhost:9095/user/wx/login',
                method: 'POST',
                header: {
                  'content-type': 'application/x-www-form-urlencoded'
                },
                data: {
                  code: login_res.code, //临时登录凭证
                  rawData: that.data.rawData, //用户非敏感信息
                  signature: that.data.signature, //签名
                  encrypteData: that.data.encryptedData, //用户敏感信息
                  iv: that.data.iv //解密算法的向量
                },
                success: function(res) {
                  if (res.data.status == 200) {
                    // 7.小程序存储skey（自定义登录状态）到本地
                   // console.log(res)
                 //   console.log("芜湖")
                    wx.setStorageSync('userInfo', that.data.userInfo);
                    //wx.setStorageSync('skey', res.data.data);
                    wx.setStorageSync('openId', res.data.data);
                    app.globalData.openId=res.data.data;
                  //  console.log("全局openid为"+app.globalData.openId)
                    app.globalData.certificationOk=2;

                    wx.switchTab({
                      url: '../index/index',
                      success: (result)=>{
                        console.log("jump success")
                      },
                      fail: ()=>{},
                      complete: ()=>{}
                    });

                    // wx.navigateTo({
                    //   url: '/pages/index/index',
                    //   success: (result)=>{
                    //     console.log(123)
                    //   },
                    //   fail: (res)=>{
                    //     console.log("shibai"+res)
                    //   },
                    //   complete: ()=>{}
                    // });

                   // console.log(userInfo)
                    // console.log(3)
                    // console.log(res.data)
                    // console.log(4)
                  } else{
                   // console.log(res)
                   console.log(res)
                    console.log('服务器异常');
                  }
                },
                fail: function(error) {
                  //调用服务端登录接口失败
                  console.log(error);
                }
              })
            // },
            // fail:function(erroreee){
            //   console.log(erroreee)
            // }
          // })
        }
      })
    }
})
