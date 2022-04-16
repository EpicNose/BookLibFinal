//app.js
App({
    
    onLaunch: function () {
        //调用API从本地缓存中获取数据
        var that=this;
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        wx.checkSession({
            success: (res)=>{
                console.log(res)
                wx.showToast({
                    title: '登录未过期!',

                });
                getApp().globalData.certificationOk=2;
                getApp().globalData.openId=wx.getStorageSync("openId");
            },
            fail: (res)=>{

                wx.navigateTo({
                    url: '../login/login',
                    success: (res)=>{
                        
                    },
                    fail: ()=>{},
                    complete: ()=>{}
                });
                wx.showToast({
                    icon:'none',
                    title: '登录过期请重新授权'
                });
            },
            complete: ()=>{}
        });
        // //登录
        // var that = this;
        // wx.request({
        //     url: 'https://' + that.globalData.apiUrl + '?m=home&c=User&a=getAccessToken',
        //     success: function (res) {
        //         that.globalData.access_token = res.data.access_token
        //     }
        // })
        
        // //定时器获取access_token
        // var timename = setInterval(function(){
        //     wx.request({
        //         url: 'https://' + that.globalData.apiUrl + '?m=home&c=User&a=getAccessToken',
        //         success: function (res) {
        //             that.globalData.access_token = res.data.access_token
        //         }
        //     })
        // }, that.globalData.timer);


    },

    getUserInfo: function (cb) {
        var that = this
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            //调用登录接口
            wx.getUserInfo({
                withCredentials: false,
                success: function (res) {
                    that.globalData.userInfo = res.userInfo
                    typeof cb == "function" && cb(that.globalData.userInfo)
                }
            })
        }
    },

    globalData: {
        userInfo: null,
        certificationOk: 0,//是否认证
        appId: 'wx9ba3ce427fd62afd',
        appSecret: '1b797d6e3d04868673b97ef908b975bb',
        session_key: null,
        openId: null,
        apiUrl: "book.imgcraft.cn:9095",//"localhost:8081",//www.1949science.cn  139.199.171.106/bookshare
        userId:null,//用户userId
        timer: 30000,//定时器设置时间
        access_token:null,
        pilotKeepTime:7 ,//自营点时间
        latitude: 39.2349700000,//团队所在纬度
        longitude: 117.0582000000,//团队所在经度

        

    },
})