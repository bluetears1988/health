// pages/search/index.js
var app = getApp()
var fileData = require('../../utils/data.js')

Page({
  data:{
    navTopItems_1: fileData.getIndexNavData(0, 4),
    navTopItems_2: fileData.getIndexNavData(4, 8),
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  }
})