import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import SimpleBar from 'simplebar-react'
import { MenuItem } from './MenuItem'
import { routes } from '/@/router'

import type { SubMenuItemProps, MenuItemProps } from './MenuItem'
import type { CustomRouteConfig } from '/@/router'

const defExtend = {
  root: false,
  menu: true,
}

const routesToMenu = (list: CustomRouteConfig[], isRoot = false): MenuItemProps[] => {
  const result: MenuItemProps[] = []
  const trans = (transList: CustomRouteConfig[]) => {
    return transList.reduce<SubMenuItemProps[]>((pre, _route) => {
      const existIndex = pre.findIndex(o => _route.extend?.group === o.group)
      const tItem: MenuItemProps = {
        name: _route.extend?.name,
        path: _route.path,
        icon: _route.extend?.icon,
        level: 1,
      }
      if (_route?.routes?.length) {
        tItem.subMenu = trans(_route.routes)
      }
      if (existIndex > -1) {
        pre[existIndex].menu.push(tItem)
      } else {
        pre.push({
          group: _route.extend?.group,
          menu: [tItem],
        })
      }
      return pre
    }, [])
  }
  list.forEach(({ extend, path, routes: _routes }) => {
    const mergeExtend = { ...defExtend, ...extend }
    const item: MenuItemProps = {
      name: mergeExtend.name,
      path: path,
      icon: mergeExtend.icon,
      root: isRoot,
      level: 1,
    }
    if (mergeExtend.menu) {
      if (_routes && _routes.length) {
        item.subMenu = trans(_routes)
      }
      result.push(item)
    }
  })
  return result
}

export default function SideBar() {
  const theme = useTheme()
  const menuList = routesToMenu(routes)
  return (
    <Box
      component="nav"
      sx={{
        width: '100%',
        maxWidth: 270,
        borderRight: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
        position: 'fixed',
        top: 52,
        left: 0,
        height: 'calc(100% - 52px)',
      }}
    >
      <SimpleBar style={{ maxHeight: '100%' }}>
        {
          menuList.map(menu => (
            <MenuItem key={menu.path} {...menu} level={1} />
          ))
        }
      </SimpleBar>
    </Box>
  )
}