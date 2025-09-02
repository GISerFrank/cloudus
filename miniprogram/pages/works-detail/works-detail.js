const mockData = require('../../utils/mockdata.js');

Page({
  data: {
    photo: null
  },
  onLoad: function (options) {
    const id = options.id;
    // 根据id从模拟数据中查找对应的作品
    const photo = mockData.mockList.find(item => item.id == id);
    if(photo) {
      this.setData({ photo });
      wx.setNavigationBarTitle({
        title: photo.title // 动态设置页面标题
      })
    }
  }
});