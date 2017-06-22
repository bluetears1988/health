// pages/users/users.js
var app = getApp()

Page({
  data:{
    userInfo: {},
    items: [
			{
				icon: '../../images/report.png',
				text: '我的报告',
				path: '/pages/reports/reports'
			}, 
			{
				icon: '../../images/order.png',
				text: '我的订单',
				path: '/pages/order/list/index'
			}
		],
		settings: [
			{
				icon: '../../images/coupon.png',
				text: '我的优惠券',
				path: ''
			}, 
			{
				icon: '../../images/msg.png',
				text: '消息',
				path: ''
			},{
				icon: '../../images/kefu.png',
				text: '联系客服',
				path: ''
			}, 
		]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // 
    this.getUserInfo()
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
  getUserInfo() {
    const userInfo = app.globalData.userInfo
    console.dirxml(userInfo);

		if (userInfo) {
			this.setData({
				userInfo: userInfo
			})
			return
		}

		app.getUserInfo()
		.then(data => {
			console.log(data)
			this.setData({
				userInfo: data
			})
		})
  },
  login: function () {
    var that = this
    wx.login({
      success: function (res) {
        app.globalData.hasLogin = true
        that.setData({
          hasLogin: true
        })
        that.update()
      }
    })
  },
  logout() {
    	app.WxService.showModal({
            title: '友情提示', 
            content: '确定要登出吗？', 
        })
        .then(data => data.confirm == 1 && this.signOut())
    },
   signOut() {
    	app.HttpService.signOut()
    	.then(data => {
    		console.log(data)
    		if (data.meta.code == 0) {
    			app.WxService.removeStorageSync('token')
    			app.WxService.redirectTo('/pages/login/index')
    		}
    	})
    },
    navigateTo(e) {
      const index = e.currentTarget.dataset.index
      const path = e.currentTarget.dataset.path

      switch(index) {
        case 2:
          app.WxService.makePhoneCall({
            phoneNumber: path
          })
          break
        default:
          app.WxService.navigateTo(path)
      }
    }

})