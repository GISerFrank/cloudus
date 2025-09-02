const mockList = [
  { 
    id: 1, 
    title: '城市上空的絮状云',
    description: '今天下午天气很好，出门散步时抬头看到天空中的云像棉花糖一样，赶紧用手机拍了下来。',
    imageUrl: 'https://placehold.co/400x600/a2d2ff/ffffff?text=Cloud+1', 
    avatar: 'https://placehold.co/100x100/ffc8dd/ffffff?text=A', 
    username: '追光者A', 
    likes: 128,
    isGallery: false,
    location: '北京市, 海淀区',
    createTime: '2小时前',
    comments: [
      { username: '云海漫步', avatar: 'https://placehold.co/100x100/cdb4db/ffffff?text=B', text: '拍得真好看！'},
      { username: 'Skywalker', avatar: 'https://placehold.co/100x100/bde0fe/ffffff?text=C', text: '这个光线绝了！'}
    ]
  },
  { 
    id: 2, 
    title: '雨后初晴的积雨云',
    description: '一场暴雨过后，巨大的积雨云砧横跨天际，非常壮观。',
    imageUrl: 'https://placehold.co/400x500/bde0fe/ffffff?text=Cloud+2', 
    avatar: 'https://placehold.co/100x100/cdb4db/ffffff?text=B', 
    username: '云海漫步', 
    likes: 256,
    isGallery: false,
    location: '上海市, 浦东新区',
    createTime: '5小时前',
    comments: []
  },
  { 
    id: 3, 
    title: '爱在日落黄昏时',
    description: '今天的晚霞是粉紫色的，太浪漫了！',
    imageUrl: 'https://placehold.co/800x400/fec5bb/ffffff?text=Sunset', 
    avatar: 'https://placehold.co/100x100/bde0fe/ffffff?text=C', 
    username: 'Skywalker', 
    likes: 99,
    isGallery: true,
    location: '杭州市, 西湖区',
    createTime: '昨天 18:50',
    comments: [ { username: '追光者A', avatar: 'https://placehold.co/100x100/ffc8dd/ffffff?text=A', text: '好美啊！'} ]
  },
  { 
    id: 4, 
    title: '高空中的卷积云',
    description: '俗称鱼鳞云，预示着天气可能要有变化。',
    imageUrl: 'https://placehold.co/400x450/a2d2ff/ffffff?text=Cloud+4', 
    avatar: 'https://placehold.co/100x100/ffc8dd/ffffff?text=D', 
    username: '风之谷', 
    likes: 301,
    isGallery: false,
    location: '重庆市, 渝中区',
    createTime: '昨天 14:20',
    comments: []
  },
   { 
    id: 5, 
    title: '破晓',
    description: '早起的人才能看到的风景。',
    imageUrl: 'https://placehold.co/800x400/f8edeb/ffffff?text=Sunrise', 
    avatar: 'https://placehold.co/100x100/cdb4db/ffffff?text=B', 
    username: '云海漫步', 
    likes: 1314,
    isGallery: true,
    location: '泰山之巅',
    createTime: '今天 05:40',
    comments: []
  },
];

module.exports = {
  mockList
}