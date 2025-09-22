Page({
  data: {
    unlockedCount: 3,
    achievements: [
      { name: '初露锋芒', description: '首次发布作品', icon: '/images/icon_badge.png', unlocked: true },
      { name: '追光者', description: '发布一张晨昏作品', icon: '/images/icon_badge.png', unlocked: true },
      { name: '云海漫步', description: '累计发布10张作品', icon: '/images/icon_badge.png', unlocked: true },
      { name: '天际猎手', description: '捕获一张荚状云', icon: '/images/icon_badge.png', unlocked: false },
      { name: '虹彩使者', description: '拍到一张带彩虹的云', icon: '/images/icon_badge.png', unlocked: false },
      { name: '千里之眼', description: '作品在10个城市发布', icon: '/images/icon_badge.png', unlocked: false },
    ]
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({ title: '我的成就' });
  }
});