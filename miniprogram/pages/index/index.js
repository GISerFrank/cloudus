const mockData = require('../../utils/mockdata.js'); // 引入模拟数据

Page({
  data: {
    mockList: [],
    leftList: [],
    rightList: []
  },

  onLoad: function () {
    this.setData({
      mockList: mockData.mockList // 从外部文件加载数据
    }, () => {
      this.loadWaterfallData();
    });
  },

  loadWaterfallData: function() {
    const { mockList } = this.data;
    const leftList = [];
    const rightList = [];
    mockList.forEach((item, index) => {
      if (index % 2 === 0) {
        leftList.push(item);
      } else {
        rightList.push(item);
      }
    });
    this.setData({ leftList, rightList });
  },
  
  navigateToUpload: function() {
    wx.navigateTo({
      url: '/pages/upload/upload'
    });
  },

  // 新增：跳转到详情页
  goToDetail: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/works-detail/works-detail?id=${id}`
    });
  }
});