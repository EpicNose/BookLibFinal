// pages/haveborrow/haveborrow.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    OrderBooks:[],
    UserInfo:{},
    openid:null,
    modalName:null,
    orderid:null,
    bookorderstate:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //还需要先获取用户id
    if(app.globalData.certificationOk != 2){

      wx.navigateTo({
        url: '../login/login',
        success: (result)=>{
          console.log("jump to login")
        },
        fail: ()=>{},
        complete: ()=>{}
      });
      wx.showToast({
        icon: 'none',
        duration: 2000,
        title: '您还没有进行信息认证！接下来先跳转至登录页面',
      })


      return ;
    }
    // this.setData({

    // })

    
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
    
    
  },
  returnModal(e) {
    this.setData({
      modalName: null
    })
    var that=this;
    //if(this.data.bookbookorderstate==1){
      wx.request({
        url: 'http://localhost:9095/user/returnbook/'+that.data.orderid,
        method: "GET",
        success: function (res) {
            // console.log(res)
            wx.showToast({
              title: res.data,
              icon: 'false',
              duration: 2000
          })
          that.onShow();
            // that.setData({
            //     bookObj: res.data,
            //     // bookObj: res.data,
            //     loading: false
            // })
        },
        fail: function () {
            wx.showToast({
                title: '获取数据失败，请稍后重试！',
                icon: 'false',
                duration: 2000
            })
        }
      })
   // }else{

   // }

    
  },
  showModal(e) {
    // this.setData({
    //   modalName: e.currentTarget.dataset.target
    // })
    
  },
  detail(e) {
    //console.log(e)
   // console.log(book.orderid)
    //book.orderid
    console.log(e)
    var that =this;
    if(e.currentTarget.dataset.bookbookorderstate == 1){
      that.setData({
        bookorderstate:e.currentTarget.dataset.bookbookorderstate,
        orderid:e.currentTarget.dataset.orderid,
        modalName: e.currentTarget.dataset.target
      })
    }else{
      wx.showToast({
        title: '本书没有借阅成功，借阅成功后再归还哦',
        icon: 'none',
        duration: 2000
    })
    }

    //var that=this;
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // this.setData({
    //   openid:app.globalData.openId
    // })


    //openid=app.globalData.openId
    var that=this;
    wx.request({
      url: 'http://localhost:9095/user/getborrowbooks/'+app.globalData.openId,
      method: "GET",
      success: function (res) {
          console.log(res)
          that.setData({
              bookObj: res.data,
              // bookObj: res.data,
              loading: false
          })
      },
      fail: function () {
          wx.showToast({
              title: '获取数据失败，请稍后重试！',
              icon: 'false',
              duration: 2000
          })
      }
  })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})