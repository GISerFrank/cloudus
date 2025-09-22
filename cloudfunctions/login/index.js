const cloud = require('wx-server-sdk')
    
// 初始化云开发环境
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  // 获取微信上下文，从中可以拿到用户的 openid
  const wxContext = cloud.getWXContext()
  const openid = wxContext.OPENID

  // 在 users 集合中查询当前用户是否存在
  const usersCollection = db.collection('users')
  const userRecord = await usersCollection.where({
    _openid: openid
  }).get()

  // 如果查询结果为空，说明是新用户
  if (userRecord.data.length === 0) {
    // 从前端传来的 event 对象中解构出 userInfo
    const { userInfo } = event
    // 在 users 集合中新增一条用户记录
    await usersCollection.add({
      data: {
        _openid: openid, // 用户的唯一标识
        nickName: userInfo.nickName,
        avatarUrl: userInfo.avatarUrl,
        createTime: new Date() // 记录创建时间
      }
    })
    // 返回新创建的用户信息给前端
    return {
      _openid: openid,
      nickName: userInfo.nickName,
      avatarUrl: userInfo.avatarUrl
    }
  } else {
    // 如果是老用户，直接返回数据库中的用户信息
    return userRecord.data[0]
  }
}

