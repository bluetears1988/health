//index.js
//获取应用实例
var app = getApp()
var fileData = require('../../utils/data.js')

Page({
  data: {
    colors:['green','white'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    banner_url: fileData.getBannerData(),
    // motto: 'Hello World',
    // nav 初始化
    navTopItems_1: fileData.getIndexNavData(0, 4),
    navTopItems_2: fileData.getIndexNavData(4, 8),
    navSectionItems: fileData.getIndexNavSectionData(),
    curNavId: 1,
    curIndex: 0,
    //套餐评分
    stars: [0, 1, 2, 3, 4],
    normalSrc: '../../images/normal.png',
    selectedSrc: '../../images/selected.png',
    halfSrc:'../../images/half.png',
    userInfo: {},
    list:null,
    prompt: {
          hidden: !0,
    },
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
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    const packages = that.data.navSectionItems
    console.dirxml(packages);

    that.setData({
        list: packages,
        'prompt.hidden': packages.length
    })
   
  },
  shopCarDetail: function(e){
    app.WxService.navigateTo('/pages/shopcar/shopcar')
  },
  //标签切换
  // switchTab: function(e) {
  //     let id = e.currentTarget.dataset.id,
  //     index = parseInt(e.currentTarget.dataset.index)
  //     this.curIndex = parseInt(e.currentTarget.dataset.index)
  //     console.log(e.currentTarget.dataset)
  //     var that = this
  //     this.setData({
  //       curNavId: id,
  //       curIndex: index,
  //     })
      
  // },

  // 跳转至详情页
  navigateDetail: function(e){
    // wx.navigateTo({
    //   url:'../detail/detail?pkgtype=' + e.currentTarget.dataset.pkgtype + '&pkgctn=' + e.currentTarget.dataset.pkgctn
    // })

    app.WxService.navigateTo('/pages/detail/detail', {
            pkgtype: e.currentTarget.dataset.pkgtype,
            pkgctn: e.currentTarget.dataset.pkgctn,
            id: e.currentTarget.dataset.pkgid
        })
  },

  search() {
        app.WxService.navigateTo('/pages/search/index')
    },

  // 加载更多
  loadMore: function (e) {
    console.log('加载更多')
    var curid = this.data.curIndex

    if (this.data.navSectionItems[curid].length === 0) return
    
    var that = this
    that.data.navSectionItems[curid] = that.data.navSectionItems[curid].concat(that.data.navSectionItems[curid])
    that.setData({
      list: that.data.navSectionItems,
    }) 
  },
})

