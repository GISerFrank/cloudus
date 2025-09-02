App({
  onLaunch() {
    // 小程序启动时执行
    console.log('App Launch')
  },
  globalData: {
    // 模拟一个全局的用户信息
    userInfo: {
      nickName: '追光者',
      avatarUrl: 'https://placehold.co/200x200/d8e2dc/ffffff?text=Avatar',
    }  }
})