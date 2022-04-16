// pages/find/find.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    publishinghouse:'',
    isbn:'',
    translator:'',
    author:'',
    bookname:'',
    inputstate:0,
    bookObj:[],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  inputpublishinghouse(e){
    //console.log(e)
    this.setData({
      publishinghouse:e.detail.value
    })
  },
  inputtranslator(e){
    //console.log(e)
    this.setData({
      translator:e.detail.value
    })
  },
  inputbookname(e){
    //console.log(e)
    this.setData({
      bookname:e.detail.value
    })
  },
  inputisbn(e){
    //console.log(e)
    this.setData({
      isbn:e.detail.value
    })
  },
  inputauthor(e){
    //console.log(e)
    this.setData({
      author:e.detail.value
    })
  },
  textareaAInput(e) {
    this.setData({
      textareaAValue: e.detail.value
    })
  },
  search(e){
    var that=this;
    wx.request({
      url: 'https://'+app.globalData.apiUrl+'/book/page?pageNum=1&pageSize=10&bookName='+that.data.bookname+'&author='+that.data.author+'&publishingHouse='+that.data.publishinghouse+'&isbn='+that.data.isbn+'&translator='+that.data.translator+'&num=',
      method: "GET",
      success: function (res) {
          console.log(res)
          that.setData({
            inputstate:1,
            bookObj:res.data.records
          })
          // wx.showToast({
          //   title: res.data,
          //   icon: 'false',
          //   duration: 2000
          // })
        //that.onShow();
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
  },
  detail: function (event) {
    var bookId = event.currentTarget.dataset.bookid;
   // console.log(event.currentTarget.dataset.bookid);
    var canShareId = event.currentTarget.dataset.canshareid;
  //  console.log(event.currentTarget.dataset.canshareid);
    var book_type = event.currentTarget.dataset.type;//type 为1时自营点 为0时C2C
    // 打开详情页
    wx.navigateTo({
        url: '../detail/detail?bookId=' + bookId + "&canShareId=" + canShareId + "&book_type=" + book_type,
    })
},
})