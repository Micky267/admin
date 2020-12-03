import { BasicLayout } from '@/layout'
/**
 * 动态路由
 */

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    // component: () => import("@/views/home/index"),
    component: BasicLayout,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index'),
        meta: {
          title: '首页',
          menuCode: '1-1'
        },
        hidden: false
      },
      {
        name: 'exam',
        path: '/exam',
        meta: { title: '考试管理', menuCode: '2-1' },
        component: () => import('@/views/exam/index'),
        hidden: false,
        children: [
          {
            name: 'scoreManage',
            path: '/exam/score-manage',
            redirect: '/exam/score-manage/score-manage-list',
            meta: { title: '成绩管理', menuCode: '2-1-1' },
            component: () => import('@/views/exam/index'),
            hidden: false,
            children: [
              {
                name: 'examScoreManageScoreManageList',
                path: '/exam/score-manage/score-manage-list',
                component: () => import('@/views/exam/scoreManage/scoreManageList/index'),
                meta: { title: '成绩列表', menuCode: '2-1-2' },
                hidden: false
              },
              {
                name: 'examScoreManageScoreManageStatic',
                path: '/exam/score-manage/score-manage-static',
                meta: { title: '成绩统计', menuCode: '2-1-3' },
                component: () => import('@/views/exam/scoreManage/scoreManageStatic/index'),
                hidden: false
              }
            ]
          },
          {
            name: 'testPaper',
            path: '/exam/test-paper',
            component: () => import('@/views/exam/index'),
            redirect: '/exam/test-pape/test-paper-histroy',
            meta: { title: '试卷管理', menuCode: '2-2-1' },
            hidden: false,
            children: [
              {
                name: 'examTestPaperTestPaperList',
                path: '/exam/test-pape/test-paper-list',
                meta: { title: '试卷列表', menuCode: '2-1-2' },
                component: () => import('@/views/exam/testPaper/testPaperList/index'),
                hidden: false
              },
              {
                name: 'examTestPaperTestPaperHistroy',
                path: '/exam/test-pape/test-paper-histroy',
                meta: { title: '历史试卷列表', menuCode: '2-1-3' },
                component: () => import('@/views/exam/testPaper/testPaperHistroy/index'),
                hidden: false
              }
            ]
          }
        ]
      },
      {
        name: 'student',
        path: '/student',
        component: () => import('@/views/student/index'),
        hidden: false,
        meta: { menuCode: '3-1', title: '学生个人信息' },
        children: [
          {
            name: 'studentMessage',
            path: '/student/message',
            component: () => import('@/views/student/message/index'),
            meta: { title: '学生个人信息', menuCode: '3-1-1' },
            hidden: false
          }
        ]
      },
      {
        name: 'teacher',
        path: '/teacher',
        component: () => import('@/views/student/index'),
        hidden: false,
        meta: { menuCode: '5-1', title: '教师个人信息' },
        children: [
          {
            name: 'teacherMessage',
            path: '/teacher/message',
            component: () => import('@/views/teacher/message/index'),
            meta: { title: '教师个人信息', menuCode: '5-1-1' },
            hidden: false
          }
        ]
      },
      {
        name: 'systemManage',
        path: '/system-manage',
        component: () => import('@/views/systemManage/index'),
        meta: { title: '系统管理', menuCode: '100-1' },
        hidden: false,
        children: [
          {
            name: 'systemManageAccessControl',
            path: '/system-manage/access-control',
            component: () => import('@/views/systemManage/AccessControl/index'),
            hidden: false,
            meta: { menuCode: '100-1-1', title: '权限控制' }
          },
          {
            name: 'systemManageAccount',
            path: '/system-manage/account',
            component: () => import('@/views/systemManage/account/index'),
            hidden: false,
            meta: { title: '账号管理', menuCode: '100-1-2' }
          }
        ]
      }
    ]
  }
]
/**
 * 基础路由
 */
export const basicRoutesMap = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index')
  }
]
