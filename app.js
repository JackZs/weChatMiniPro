App({
	onLaunch:function () {
	   console.log('app start')
	},
	onShow:function () {
	   console.log("on show")
	},
	onHide:function () {
	   console.log("on hide")
	},
	globalData:{
		userInfo:null,
		subDomain:'tz',//子域名 如果你的域名是： https://api.it120.cc/abcd 那么这里只要填写 abcd
		shareProfile:'白款精美商商品,总有一款适合你'
	}
});