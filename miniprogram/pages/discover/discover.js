Page({
  data: {},
  onLoad: function (options) {},

  // 跳转到晨昏美术馆活动页
  goToDuskActivity: function() {
    wx.navigateTo({
      url: '/pages/activity-dusk/activity-dusk',
    })
  }
});