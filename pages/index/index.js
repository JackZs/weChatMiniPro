var app = getApp()
Page({
	data:{
		indicatorDots:false,
		autoplay:true,
		interval:2000,
		duration: 500,
		imgUrls: [
	      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
	      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
	      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
	      'https://img.alicdn.com/simba/img/TB1qBSmor_I8KJjy1XaSuvsxpXa.jpg'
    ],
    categories:[],
    noticeList:[]
	},
	swiperchange(){
	},
	tapBanner(){

	},
	tabClick(){

	},
	listenerSearchInput(){

	},
	toSearch(){
		
	},
	onReady(){
	  console.log('onReady')
	},
	onShow(){
      console.log('onShow')		
	},
	onLoad(){
	  console.log('onLoad')
	  console.log(app.globalData);
	  wx.request({
	  	url:'https://api.it120.cc',
	  	data:{

	  	}
	  })
	}
})
