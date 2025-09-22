const mockData = require('../../utils/mockdata.js');

Page({
  data: {
    galleryList: []
  },
  onLoad: function (options) {
    const galleryList = mockData.mockList.filter(item => item.isGallery);
    this.setData({
      galleryList: galleryList
    });
    wx.setNavigationBarTitle({
      title: '晨昏美术馆'
    })
  },
  // 新增：追光闹钟占位函数
  showAlarmClock: function() {
    wx.showToast({
      title: '闹钟功能正在开发中...',
      icon: 'none'
    })
  },
  goToDetail: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/works-detail/works-detail?id=${id}`
    });
  }
});