const mockData = require('../../utils/mockdata.js');

Page({
  data: {
    galleryList: []
  },
  onLoad: function (options) {
    // 筛选出晨昏作品
    const galleryList = mockData.mockList.filter(item => item.isGallery);
    this.setData({
      galleryList: galleryList
    });
    wx.setNavigationBarTitle({
      title: '晨昏美术馆'
    })
  },
  goToDetail: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/works-detail/works-detail?id=${id}`
    });
  }
});