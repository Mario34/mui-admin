import React from 'react'
import loadable from '@loadable/component'
import Layout from '/@/components/Layout'
import { AuthWrapper } from './Wrapper'
import Fallback from '/@/components/Fallback'
import SvgIcon from '@material-ui/core/SvgIcon'
import {
  Inbox as InboxIcon,
  Apps as AppsIcon,
  Code as CodeIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  ExitToAppOutlined as ExitToAppOutlinedIcon,
} from '@material-ui/icons'

import type { RouteComponentProps } from 'react-router'

type SvgIconComponent = typeof SvgIcon

export interface AuthWrapperType {
  (props: React.PropsWithChildren<{ route: CustomRouteConfig }>): JSX.Element
}

export interface BaseRouteExtendType {
  /** 在侧边栏中显示 */
  menu: boolean | undefined
  /** 侧边栏名称 */
  name: string | undefined
  /** 侧边栏图标 */
  icon: SvgIconComponent | undefined
}

/** 扩展字段（用于配制侧边栏、权限） */
export interface RouteExtendType extends Partial<BaseRouteExtendType> {
  //TODO: 根据业务需求进行扩展
  authCode: number
}

export interface RouteConfigComponentProps<Params extends { [K in keyof Params]?: string } = {}>
  extends RouteComponentProps<Params> {
  route?: CustomRouteConfig | undefined
}

export interface CustomRouteConfig {
  key?: React.Key | undefined
  exact?: boolean | undefined
  strict?: boolean | undefined
  path: string
  redirect?: string
  routes?: CustomRouteConfig[]
  extend?: Partial<RouteExtendType>
  component?: React.ComponentType<RouteConfigComponentProps<any>> | React.ComponentType | undefined
  wrappers?: AuthWrapperType
  render?: ((props: RouteConfigComponentProps<any>) => React.ReactNode) | undefined
  [propName: string]: any
}

const lazyLoad = (
  loadFn: (props: any) => Promise<any>,
  fallback = Fallback,
) => loadable(loadFn, { fallback })

export const layoutRoutes: CustomRouteConfig[] = [
  {
    path: '/home',
    exact: true,
    component: lazyLoad(() => import('/@/page/home')),
    extend: {
      icon: AppsIcon,
      name: '数据概览',
    },
  },
  {
    path: '/module',
    extend: {
      icon: InboxIcon,
      name: '订单管理',
    },
    routes: [
      {
        path: '/module/a',
        exact: true,
        wrappers: AuthWrapper,
        component: lazyLoad(() => import('/@/page/home')),
        extend: {
          name: '所有订单',
        },
      },
      {
        path: '/module/page-home',
        exact: true,
        component: lazyLoad(() => import('/@/page/home')),
        extend: {
          name: '售后订单',
        },
      },
    ],
  },
  {
    path: '/module-b',
    extend: {
      icon: CodeIcon,
      name: '权限管理',
    },
    routes: [
      {
        path: '/module-b/page-home',
        exact: true,
        component: lazyLoad(() => import('/@/page/home')),
        extend: {
          name: '快速开始',
        },
      },
      {
        path: '/module-b/page-home-',
        exact: true,
        component: lazyLoad(() => import('/@/page/home')),
        extend: {
          name: '快速开始',
        },
      },
    ],
  },
  {
    path: '/roles',
    extend: {
      icon: AccountCircleOutlinedIcon,
      name: '角色管理',
    },
    routes: [
      {
        path: '/roles/page-home',
        exact: true,
        component: lazyLoad(() => import('/@/page/home')),
        extend: {
          icon: AccountCircleOutlinedIcon,
          name: '角色管理',
        },
      },
    ],
  },
  {
    path: '/login',
    exact: true,
    redirect: '/login',
    extend: {
      icon: ExitToAppOutlinedIcon,
      name: '登录',
    },
  },
]

export const routes: CustomRouteConfig[] = [
  {
    path: '/',
    exact: true,
    redirect: '/home',
  },
  {
    path: '/login',
    exact: true,
    component: lazyLoad(() => import('/@/page/login')),
    extend: {
      menu: false,
      name: '登录/注册',
    },
  },
  {
    path: '/',
    wrappers: AuthWrapper,
    component: Layout,
    routes: layoutRoutes,
  },
  {
    path: '*',
    component: lazyLoad(() => import('/@/page/404')),
    extend: {
      menu: false,
    },
  },
]
