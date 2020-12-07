import Mock from 'mockjs'
Mock.mock('/user/login', 'post', {
  status: 200,
  message: 'success',
  data: {
    total: 100,
    'rows|10': [
      {
        id: '@guid',
        name: '@cname',
        'age|20-30': 23,
        'job|1': ['前端工程师1', '后端工程师', 'UI工程师', '需求工程师']
      }
    ]
  }
})
