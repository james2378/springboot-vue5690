import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import fenlei from '@/views/modules/fenlei/list'
    import news from '@/views/modules/news/list'
    import changliaobankuai from '@/views/modules/changliaobankuai/list'
    import discussshumataolun from '@/views/modules/discussshumataolun/list'
    import shumataolun from '@/views/modules/shumataolun/list'
    import yonghu from '@/views/modules/yonghu/list'
    import shumabankuai from '@/views/modules/shumabankuai/list'
    import discusschangliaobankuai from '@/views/modules/discusschangliaobankuai/list'
    import discussshumapingjia from '@/views/modules/discussshumapingjia/list'
    import shumapingjia from '@/views/modules/shumapingjia/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/fenlei',
        name: '分类',
        component: fenlei
      }
      ,{
	path: '/news',
        name: '新闻资讯',
        component: news
      }
      ,{
	path: '/changliaobankuai',
        name: '畅聊板块',
        component: changliaobankuai
      }
      ,{
	path: '/discussshumataolun',
        name: '数码讨论评论',
        component: discussshumataolun
      }
      ,{
	path: '/shumataolun',
        name: '数码讨论',
        component: shumataolun
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/shumabankuai',
        name: '数码板块',
        component: shumabankuai
      }
      ,{
	path: '/discusschangliaobankuai',
        name: '畅聊板块评论',
        component: discusschangliaobankuai
      }
      ,{
	path: '/discussshumapingjia',
        name: '数码评价评论',
        component: discussshumapingjia
      }
      ,{
	path: '/shumapingjia',
        name: '数码评价',
        component: shumapingjia
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
