//index.js
//获取应用实例
const app = getApp()
var fileData = require('../../utils/data.js')
Page({
  data: {
   imgUrl:[
     "../../images/banner_01.png",
     "../../images/banner_02.png",
     "../../images/banner_03.png",
     "../../images/banner_04.png" 
   ],
    iconsList:[
      {
        id:1,
        icon:"../../images/nav_icon_01.png",
        title:'推荐'
      },
      {
        id: 2,
        icon: "../../images/nav_icon_02.png",
        title: '美甲'
      },
      {
        id: 3,
        icon: "../../images/nav_icon_03.png",
        title: '美发'
      },
      {
        id: 4,
        icon: "../../images/nav_icon_04.png",
        title: '美睫'
      },
      {
        id: 5,
        icon: "../../images/nav_icon_05.png",
        title: '推荐'
      }
    ]
      
    
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
