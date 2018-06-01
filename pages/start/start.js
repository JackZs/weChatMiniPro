var app = getApp()
Page({
	data:{
		remind:'加载中!',
		userInfo:{'avatarUrl':''}
	},
	onLoad:function () {
		console.log(wx)
		wx.setNavigationBarTitle({
			title: wx.getStorageSync('mallName')
		})
	},
	onShow:function () {
		console.log(2)
	},
	onReady:function () {
		console.log(3)
		setInterval(()=>{
			this.setData({'remind':''})
		},100)
	},
	gotoIndex:function (event) {
	  console.log(event)
	  wx.switchTab({
	  	url:'/pages/index/index'
	  })
	}

})