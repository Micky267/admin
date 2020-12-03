/**
 * 模拟动态路由的数据
 */

// 学生权限
export const mockStudentRouters = [
  {
    path: '/home',
    title: '首页',
    menuCode: '1-1',
    hidden: false
  },
  {
    path: '/student',
    title: '学生个人信息',
    menuCode: '3-1',
    hidden: false,
    children: [
      {
        path: '/student/message',
        title: '学生个人信息',
        menuCode: '3-1-1',
        hidden: false
      }
    ]
  },
  {
    path: '/exam',
    title: '考试管理',
    menuCode: '2-1',
    hidden: false,
    children: [
      {
        path: '/exam/score-manage',
        title: '成绩管理',
        menuCode: '2-1-1',
        hidden: false
      }
    ]
  }
]

// 老师权限
export const mockTeacherRouters = [
  {
    path: '/home',
    title: '首页',
    menuCode: '1-1',
    hidden: false
  },
  {
    path: '/teacher',
    title: '教师个人信息',
    menuCode: '5-1',
    hidden: false,
    children: [
      {
        path: '/teacher/list',
        title: '教师个人信息',
        menuCode: '5-1-1',
        hidden: false
      }
    ]
  },
  {
    path: '/exam',
    title: '考试管理',
    menuCode: '2-1',
    hidden: false,
    children: [
      {
        path: '/score/manage',
        title: '成绩管理',
        menuCode: '2-1-1',
        hidden: false,
        children: [
          {
            path: '/score/manage/list',
            title: '成绩列表',
            menuCode: '2-1-2',
            hidden: false
          },
          {
            path: '/score/manage/static',
            title: '成绩统计',
            menuCode: '2-1-3',
            hidden: false
          }
        ]
      },
      {
        path: '/test-paper/manage',
        title: '试卷管理',
        menuCode: '2-2-1',
        hidden: false,
        children: [
          {
            path: '/test-paper/list',
            title: '试卷列表',
            menuCode: '2-1-2',
            hidden: false
          },
          {
            path: '/test-paper/histroy-list',
            title: '历史试卷列表',
            menuCode: '2-1-3',
            hidden: false
          }
        ]
      }
    ]
  }
]

// 管理员权限
export const mockAdminRouters = [
  {
    path: '/home',
    title: '首页',
    menuCode: '1-1',
    hidden: false
  },
  {
    path: '/exam',
    title: '考试管理',
    menuCode: '2-1',
    hidden: false,
    children: [
      {
        path: '/exam/manage',
        title: '成绩管理',
        menuCode: '2-1-1',
        hidden: false,
        children: [
          {
            path: '/exam/manage/list',
            title: '成绩列表',
            menuCode: '2-1-2',
            hidden: false
          },
          {
            path: '/exam/manage/static',
            title: '成绩统计',
            menuCode: '2-1-3',
            hidden: false
          }
        ]
      },
      {
        path: '/test-paper/manage',
        title: '试卷管理',
        menuCode: '2-2-1',
        hidden: false,
        children: [
          {
            path: '/test-paper/list',
            title: '试卷列表',
            menuCode: '2-1-2',
            hidden: false
          },
          {
            path: '/test-paper/histroy-list',
            title: '历史试卷列表',
            menuCode: '2-1-3',
            hidden: false
          }
        ]
      }
    ]
  },
  {
    path: '/system-manage',
    title: '系统管理',
    menuCode: '100-1',
    hidden: false,
    children: [
      {
        path: '/system-manage/access-control',
        title: '权限控制',
        menuCode: '100-1-1',
        hidden: false
      },
      {
        path: '/system-manage/account',
        title: '账号管理',
        menuCode: '100-1-2',
        hidden: false
      }
    ]
  }
]
