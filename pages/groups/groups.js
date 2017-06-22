// pages/groups/groups.js
var app = getApp()
var fileData = require('../../utils/data.js')

Page({
  data:{
    groups:[
      {
        title:"adfsdfsdfdsfeffef",
        shichang_price:"9000",
        lowest_price:"980",
      },
      {
        title:"adfsdfsdfdsfeffeffsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdffsfsffs",
        shichang_price:"900",
        lowest_price:"680",
      },
      {
        title:"adfsdfsdfdsfeffef",
        shichang_price:"900",
        lowest_price:"680",
      },
      {
        title:"adfsdfsdfdsfeffef",
        shichang_price:"900",
        lowest_price:"680",
      },
      {
        title:"adfsdfsdfdsfeffef",
        shichang_price:"900",
        lowest_price:"680",
      },
      {
        title:"adfsdfsdfdsfeffef",
        shichang_price:"900",
        lowest_price:"680",
      },
      {
        title:"adfsdfsdfdsfeffeffsdfdsff",
        shichang_price:"900",
        lowest_price:"680",
      },
      {
        title:"adfsdfsdfdsfeffefdfsd",
        shichang_price:"900",
        lowest_price:"680",
      },
      {
        title:"adfsdfsdfdsfeffefsdfsdfsdfsdf",
        shichang_price:"900",
        lowest_price:"680",
      },
      {
        title:"adfsdfsdfdsfeffesdsdfsdff",
        shichang_price:"900",
        lowest_price:"680",
      },
      {
        title:"adfsdfsdfdsfeffsdfsfdsfsdfsdfdfdsef",
        shichang_price:"900",
        lowest_price:"680",
      }
    ]
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
  },
  search() {
      app.WxService.navigateTo('/pages/search/index')
  },
})