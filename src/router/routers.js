import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout/index'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login',
    meta: { title: '登录', noCache: true },
    component: (resolve) => require(['@/views/login'], resolve),
    hidden: true
  },
  {
    path: '/404',
    component: (resolve) => require(['@/views/features/404'], resolve),
    hidden: true
  },
  {
    path: '/401',
    component: (resolve) => require(['@/views/features/401'], resolve),
    hidden: true
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: (resolve) => require(['@/views/features/redirect'], resolve)
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/basedata/syncsap',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: (resolve) => require(['@/views/home'], resolve),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'index', affix: true, noCache: true }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    hidden: true,
    redirect: 'noredirect',
    children: [
      {
        path: 'center',
        component: (resolve) => require(['@/views/system/user/center'], resolve),
        name: '个人中心',
        meta: { title: '个人中心' }
      }
    ]
  },
  {
    path: '/basedata',
    name: '基础数据',
    meta: {
      icon: 'app',
      noCache: true,
      title: '基础数据'
    },
    component: Layout,
    hidden: false,
    redirect: 'noredirect',
    children: [
      {
        path: 'syncsap',
        component: (resolve) => require(['@/views/basedata/SyncSap.vue'], resolve),
        name: '产品信息SAP同步',
        meta: { title: '产品信息SAP同步' }
      },
      {
        path: 'csyncsap',
        component: (resolve) => require(['@/views/basedata/CSyncSap.vue'], resolve),
        name: '销售需求可变项SAP同步',
        meta: { title: '销售需求可变项SAP同步' }
      },
      {
        path: 'producttype',
        component: (resolve) => require(['@/views/basedata/ProductType.vue'], resolve),
        name: '物料产品型号',
        meta: { title: '物料产品型号' }
      },
      {
        path: 'depmail',
        component: (resolve) => require(['@/views/basedata/DepMail.vue'], resolve),
        name: '部门邮件推送',
        meta: { title: '部门邮件推送' }
      },
      {
        path: 'prodnum',
        component: (resolve) => require(['@/views/basedata/ProdNum.vue'], resolve),
        name: '生产工号维护',
        meta: { title: '生产工号维护' }
      },
      {
        path: 'qcversion',
        component: (resolve) => require(['@/views/basedata/QCVersion.vue'], resolve),
        name: '质检版本',
        meta: { title: '质检版本' }
      },
      {
        path: 'qcinfo',
        component: (resolve) => require(['@/views/basedata/QCInfo.vue'], resolve),
        hidden: true,
        name: '质检明细',
        meta: { title: '质检明细' }
      }
    ]
  },

  {
    path: '/sheet',
    name: '报表',
    meta: {
      icon: 'monitor',
      title: '报表',
      noCache: true
    },
    component: Layout,
    hidden: false,
    redirect: 'noredirect',
    children: [
      {
        path: 'qtsearch',
        name: '质量跟单查询',
        meta: {
          title: '质量跟单查询'
        },
        component: resolve => require(['@/views/sheet/QtSearch.vue'], resolve)
      },
      {
        path: 'uqsearch',
        name: '不合格项查询',
        meta: {

          title: '不合格项查询'
        },
        component: resolve => require(['@/views/sheet/UqSearch.vue'], resolve)
      },
      {
        path: 'qcinfo',
        hidden: true,
        name: '质检明细查询',
        meta: {

          title: '质检明细查询'
        },
        component: resolve => require(['@/views/sheet/QcInfo.vue'], resolve)
      },
      {
        path: 'statistics',
        name: '可视化质量统计',
        meta: {

          title: '可视化质量统计'
        },
        component: resolve => require(['@/views/sheet/Statistics.vue'], resolve)
      }
    ]
  },
  {
    path: '/qselfcheck',
    name: '质量自检',
    meta: {
      title: '质量自检(pad)'
    },
    component: resolve => require(['@/views/pad/qcs.vue'], resolve)
  },
  {
    path: '/selfcheck',
    name: '生产自检',
    meta: {
      title: '生产检验(pad)'
    },
    component: resolve => require(['@/views/pad/selfcheck.vue'], resolve)
  },
  {
    path: '/uqcheck',
    name: '不合格会签',
    meta: {
      title: '不合格会签(pad)'
    },
    component: resolve => require(['@/views/pad/uqcheck.vue'], resolve)
  }
]

export default new Router({
  // mode: 'hash',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
