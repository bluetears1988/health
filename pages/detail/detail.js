// pages/detail/detail.js
//获取应用实例
var app = getApp()
var fileData = require('../../utils/data.js')

Page({
  data:{
    detail:{}
  },
   onShareAppMessage: function () {
    return {
      title: '一家健康 一生守护',
      path: '/page/user?id=123',
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    that.setData({
      detail:fileData.getPkgDetailData(options.pkgctn, options.pkgtype),
      pkgid: options.pkgid
      // pingjia:fileData.getPjData(options.pkgctn, options.pkgtype)
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  // 跳转至详情页
  shopCarDetail: function(e){
    app.WxService.navigateTo('/pages/shopcar/shopcar')
  },
  // 跳转至评论页
  morePj: function(e){
    app.WxService.navigateTo('/pages/evaluate/evaluate')
  },   
  getDetail(id) {
      var arr = fileData.getIndexNavSectionData();
      return arr[id]
  },
  showToast(message) {
      app.WxService.showToast({
          title   : message, 
          icon    : 'success', 
          duration: 1500, 
      })
  },
  addCart(e) {
      const goods = this.pkgid
      app.HttpService.addCartByUser(goods)
      .then(data => {
          console.log(data)
          if (data.meta.code == 0) {
              this.showToast(data.meta.message)

          }
      })
  },
})