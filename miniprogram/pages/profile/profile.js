const mockData = require('../../utils/mockdata.js');
const app = getApp();

Page({
  data: {
    userInfo: {},
    hasUserInfo: false, // 确保初始状态为 false
    myWorks: [] 
  },

  onLoad() {
    // 检查全局数据中是否已经有登录信息（比如用户跳转到别的页面又回来）
    const userInfo = app.globalData.userInfo;
    if (userInfo) {
      this.setData({
        userInfo: userInfo,
        hasUserInfo: true,
      });
    }
    // 作品列表暂时继续使用模拟数据
    this.setData({ myWorks: mockData.mockList });
  },

  // 真实登录逻辑
  getUserProfile(e) { 
    wx.showLoading({
      title: '正在登录...',
    })

    wx.getUserProfile({
      desc: '用于完善会员资料', 
      success: (res) => {
        const userInfo = res.userInfo;

        // 调用 login 云函数
        wx.cloud.callFunction({
          name: 'login',
          data: {
            userInfo: userInfo
          },
          success: cloudRes => {
            wx.hideLoading();
            console.log('[云函数] [login] 用户信息: ', cloudRes.result);
            const userData = cloudRes.result;

            // 将返回的用户信息存储到全局和当前页面
            app.globalData.userInfo = userData;
            this.setData({
              userInfo: userData,
              hasUserInfo: true
            });

            wx.showToast({
              title: '登录成功',
              icon: 'success'
            })
          },
          fail: err => {
            wx.hideLoading();
            console.error('[云函数] [login] 调用失败', err)
            wx.showToast({
              title: '登录失败',
              icon: 'error'
            })
          }
        })
      },
      fail: () => {
        wx.hideLoading();
        wx.showToast({
          title: '您取消了授权',
          icon: 'none'
        })
      }
    })
  },
  
  // 其他方法保持不变
  navigateTo: function(e) {
    const page = e.currentTarget.dataset.page;
    wx.navigateTo({
      url: `/pages/${page}/${page}`,
    });
  },
  
  goToDetail: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/works-detail/works-detail?id=${id}`
    });
  }
});

