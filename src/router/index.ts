import loadable from '@loadable/component'
import InboxIcon from '@material-ui/icons/Inbox'
import Layout from '/@/components/Layout'
import { RouteConfig } from 'react-router-config'
import Fallback from '/@/components/Fallback'

import SvgIcon from '@material-ui/core/SvgIcon'

type SvgIconComponent = typeof SvgIcon

export interface BaseRouteExtendType {
  /** 在侧边栏中显示 */
  menu: boolean | undefined
  /** 侧边栏名称 */
  name: string | undefined
  /** 侧边栏图标 */
  icon: SvgIconComponent | undefined
  /** 分组名 */
  group: string | undefined
}

/** 扩展字段（用于配制侧边栏、权限） */
export interface RouteExtendType extends Partial<BaseRouteExtendType> {
  //TODO: 根据业务需求进行扩展
  authCode: number
}

export interface CustomRouteConfig extends RouteConfig {
  path: string
  routes?: CustomRouteConfig[]
  extend?: Partial<RouteExtendType>
}

const lazyLoad = (
  loadFn: (props: any) => Promise<any>,
  fallback = Fallback,
) => loadable(loadFn, { fallback })

export const routes: CustomRouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: lazyLoad(() => import('/@/page/home')),
    extend: {
      menu: false,
    },
  },
  {
    path: '/module',
    extend: {
      icon: InboxIcon,
      name: '快速开始',
    },
    component: Layout,
    routes: [
      {
        path: '/module/page-home',
        exact: true,
        component: lazyLoad(() => import('/@/page/home')),
        extend: {
          icon: InboxIcon,
          name: '快速开始',
        },
      },
      {
        path: '/module/page-a',
        exact: true,
        component: lazyLoad(() => import('/@/page/page-a')),
        extend: {
          icon: InboxIcon,
          name: 'page-a',
        },
      },
      {
        path: '/module/page-b',
        exact: true,
        component: lazyLoad(() => import('/@/page/page-b')),
        extend: {
          icon: InboxIcon,
          name: 'page-b',
        },
      },
    ],
  },
  {
    path: '/module-b',
    component: Layout,
    extend: {
      icon: InboxIcon,
      name: 'module-b',
    },
    routes: [
      {
        path: '/module-b/page-home',
        exact: true,
        component: lazyLoad(() => import('/@/page/home')),
        extend: {
          icon: InboxIcon,
          name: '快速开始',
        },
      },
    ],
  },
  {
    path: '/login',
    component: lazyLoad(() => import('/@/page/login')),
    extend: {
      menu: false,
    },
  },
]