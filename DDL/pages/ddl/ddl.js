// pages/ddl/ddl.js
//index.js 调用封装的方法
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  
  data: {
    dateString: "",
    // spot: ['2021/1/17', '2021/2/17', '2021/3/17', '2021/4/17', '2021/5/17', '2021/6/17', '2021/7/17', '2021/8/17', '2021/9/17', '2021/10/17', '2021/11/17', '2021/12/17'],
    ddl_list: app.globalData.ddl_list,
    active:1,
    syn:''
  },
  dateChange(e) {
    // console.log("选中日期变了,现在日期是", e.detail.dateString)
    this.setData({
      dateString: e.detail.dateString
    })
  },
  onReady: function () {
  },
  onLoad() {
    this.setData({
      ddl_list:globalData.ddl_list.reverse()
    });
  },
  onPullDownRefresh(){
    wx.stopPullDownRefresh();
  },
  onChange(event) {
    this.setData({ active: event.detail });
  },
  synchronize(){
    this.data.syn = true;//后面根据后端逻辑完成函数
  },
  //传参给编辑界面
  pass(e){
    console.log(e.target.dataset.ddl);
  }
})