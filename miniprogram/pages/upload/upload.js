Page({
  data: {
    tempFilePath: '',
    cloudTypes: ['积云', '层云', '卷云', '雨层云', '高积云', '荚状云', '乳状云'],
    selectedType: '积云'
  },
  chooseImage: function() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        this.setData({
          tempFilePath: res.tempFiles[0].tempFilePath
        })
      }
    })
  },
  selectType: function(e) {
    this.setData({
      selectedType: e.currentTarget.dataset.type
    })
  }
});