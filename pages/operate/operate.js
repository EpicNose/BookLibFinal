var utils = require('../../utils/util.js');
var app = getApp()
// pages/home/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
       
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
        utils.checkSettingStatu();
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

    },

    /**
     * 别人的借书申请
     */
    borrowApplication:function(){
        if (app.globalData.certificationOk != 2) {
            wx.showToast({
                title: '您还没有进行信息认证！',
            })
            return;
        }
        wx.navigateTo({
            url: '../borrowApplication/borrowApplication'
        })
    },

    /**
     * 借入
     */
    borrowIn: function () {
        if (app.globalData.certificationOk != 2) {
            wx.showToast({
                title: '您还没有进行信息认证！',
            })
            return;
        }
        wx.navigateTo({
            url: '../borrowIn/borrowIn'
        })
    },

    //待归还
    returnBack:function(){
        if (app.globalData.certificationOk != 2) {
            wx.showToast({
                title: '您还没有进行信息认证！',
            })
            return;
        }
        wx.navigateTo({
            url: '../returnBack/returnBack'
        })
    },

    //收书
    getBook:function(){
        if (app.globalData.certificationOk != 2) {
            wx.showToast({
                title: '您还没有进行信息认证！',
            })
            return;
        }
        wx.navigateTo({
            url: '../getBook/getBook'
        })
    },

    //图书管理
    bookMan: function () {
        if (app.globalData.certificationOk != 2) {
            wx.showToast({
                title: '您还没有进行信息认证！',
            })
            return;
        }
        wx.navigateTo({
            url: '../bookMan/bookMan'
        })
    },
    
    screenISBN: function () {
        if (app.globalData.certificationOk != 2) {
            wx.showToast({
                title: '您还没有进行信息认证！',
            })
            return;
        }
        wx.navigateTo({
            url: '../operateShare/operateShare'
        })
    },

    pilot:function(){
        if (app.globalData.certificationOk != 2) {
            wx.showToast({
                title: '您还没有进行信息认证！',
            })
            return;
        }
        wx.navigateTo({
            url: '../pilot/pilot'
        })
    },

    openComment: function () {
        if (app.globalData.certificationOk != 2) {
            wx.showToast({
                title: '您还没有进行信息认证！',
            })
            return;
        }
      wx.navigateTo({
          url: '../joinShare/joinShare'
      })
    },

})