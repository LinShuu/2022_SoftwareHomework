// pages/login/login.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:'',
    users:[],
  },

  // 导航栏返回操作
  onClickLeft(){
    wx.navigateBack({
      delta: 1,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  name(e){
    this.data.username = e.detail.value;
  },

  pw(e){
    this.data.password = e.detail.value;
  },

  login(){
    var that = this
    if (that.data.username === "") {
      wx.showToast({
        title: '请输入用户名',
        icon: 'none',
        duration: 1500,
      });
    } else if (that.data.password === ""){
      wx.showToast({
        title: '请输入密码',
        icon: 'none',
        duration: 1500,
      });
    } else{
      wx.request({
        url: 'http://localhost:8055/user/login',//接入自己的接口
        data: {
          password:this.data.password,
          username:this.data.username
        },
        header: {"Content-Type": "application/x-www-form-urlencoded"},
        success: (result)=>{
          if (result.data.code === 200){
            wx.reLaunch({
              url: '../index/index'//成功跳到主页
            })
            wx.showToast({
              title: "登录成功",
              icon: 'success',
              duration: 1500,
            });
          } else if (result.data.code === 0){
            wx.showToast({
              title: result.data.msg,
              icon: 'none',
              duration: 1500,
            });
          } else{
            wx.showToast({
              title: '登陆失败',
              icon: 'error',
              duration: 1500,
            });
          }
        },
        fail: ()=>{
          wx.showToast({
            title: '网络错误',
            icon: 'error',
            duration: 1500,
          });
        },
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})