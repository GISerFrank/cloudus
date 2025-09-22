const mockData = require('../../utils/mockdata.js');

Page({
  data: {
    photo: null
  },
  onLoad: function (options) {
    const id = options.id;
    const photo = mockData.mockList.find(item => item.id == id);
    if(photo) {
      this.setData({ photo });
      wx.setNavigationBarTitle({
        title: photo.title
      })
    }
  },

  // 新增：打开地图详情页
  openMap: function() {
    const { latitude, longitude, location } = this.data.photo;
    wx.navigateTo({
      url: `/pages/map-detail/map-detail?lat=${latitude}&lng=${longitude}&location=${location}`
    })
  }
});
