Page({
  data: {
    latitude: 39.9042,
    longitude: 116.4074,
    markers: []
  },
  onLoad: function (options) {
    const { lat, lng, location } = options;
    const latitude = parseFloat(lat);
    const longitude = parseFloat(lng);
    
    wx.setNavigationBarTitle({ title: location || '位置详情' });

    this.setData({
      latitude,
      longitude,
      markers: [{
        id: 1,
        latitude,
        longitude,
        title: location,
        iconPath: '/images/icon_location_pin.png',
        width: 30,
        height: 30
      }]
    })
  }
});