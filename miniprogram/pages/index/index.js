const mockData = require('../../utils/mockdata.js'); 

Page({
  data: {
    activeTab: 'recommend', // 当前激活的tab
    mockList: [],
    leftList: [],
    rightList: []
  },

  onLoad: function () {
    this.setData({
      mockList: mockData.mockList 
    }, () => {
      this.loadWaterfallData();
    });
  },

  // 新增：切换页签
  switchTab: function(e) {
    const tab = e.currentTarget.dataset.tab;
    if (tab === this.data.activeTab) {
      return;
    }
    this.setData({
      activeTab: tab
    });
    // todo: 后续在这里根据不同的tab请求不同的数据
    wx.showToast({
      title: `已切换到'${tab}'`,
      icon: 'none'
    })
  },

  loadWaterfallData: function() {
    // 瀑布流数据分配逻辑
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

  goToDetail: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/works-detail/works-detail?id=${id}`
    });
  }
});