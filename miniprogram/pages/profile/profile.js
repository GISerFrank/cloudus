const mockData = require('../../utils/mockdata.js');
const app = getApp();

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    myWorks: [] 
  },
  onLoad() {
    this.setData({
      myWorks: mockData.mockList, // 暂时显示所有作品作为我的作品
      userInfo: app.globalData.userInfo,
      hasUserInfo: true // 假设已登录
    })
  },
  getUserProfile(e) {
    wx.getUserProfile({
      desc: '用于完善会员资料', 
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  goToDetail: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/works-detail/works-detail?id=${id}`
    });
  }
});