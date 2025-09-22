const mockData = require('../../utils/mockdata.js');
Page({
  data: {
    favoritesList: []
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({ title: '我的收藏' });
    // 模拟收藏列表为所有作品
    this.setData({ favoritesList: mockData.mockList });
  },
  goToDetail: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/works-detail/works-detail?id=${id}`
    });
  }
});