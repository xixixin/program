// pages/fn/fn.js
//初始化数据库
const db = wx.cloud.database()
//取对应的数据库集合
const program = db.collection('program')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      //name:对应的云函数名称
      name:'book',
      //data:我们传给云函数的参数
      data:{
        number:12345,
      },
      //调用云函数成功的回调函数
      success:(res)=>{
        console.log(res)
      },
      //调用云函数失败的回调函数
      fail:(err)=>{
        console.log(err)
      }
    })
    db.collection('program').get().then(res => {
      // res.data 包含该记录的数据
      console.log(res.data)
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})