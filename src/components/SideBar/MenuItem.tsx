import React, { useState } from 'react'
import { Box, Collapse, ButtonBase } from '@material-ui/core'
import { KeyboardArrowRightRounded } from '@material-ui/icons'
import { useStyles } from './styles'
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom'
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'
import classNames from 'classnames'

import type { CustomRouteConfig } from '/@/router'

type SvgIconComponent = typeof SvgIcon

export interface MenuItemProps extends CustomRouteConfig {
  level: number
}

const MenuIcon = ({ icon, ...props }: { icon: SvgIconComponent } & SvgIconProps) => {
  return React.createElement(icon, props)
}

export const MenuItem: React.FC<MenuItemProps> = ({
  level,
  path,
  routes,
  extend,
}) => {
  const [open, setOpen] = useState(false)
  const history = useHistory()
  const location = useLocation()
  const styles = useStyles()
  const hasSub = !!routes?.length
  const match = useRouteMatch(path)

  const onClick = (p: string) => {
    if (hasSub && routes.length > 1) {
      setOpen((val) => !val)
    } else if (!match) {
      history.push(p)
    }
  }

  React.useEffect(() => {
    const value = !!match
    if (value) {
      setOpen(true)
    }
  }, [location.pathname])

  return (
    <Box className={classNames(styles.root, { root: level === 1 })}>
      {
        routes?.length === 1 ? (
          <ButtonBase
            disableRipple
            className={classNames(
              styles.title,
              {
                [styles.titleActive]: location.pathname === routes[0].path,
              },
            )}
            onClick={() => history.push(routes[0].path)}
          >
            {routes[0].extend?.icon && (
              <MenuIcon
                className={styles.icon}
                icon={routes[0].extend?.icon}
              />
            )}
            <Box sx={{ ml: 1 }}>{routes[0].extend?.name}</Box>
          </ButtonBase>
        ) : (
          <>
            <ButtonBase
              disableRipple
              className={classNames(
                styles.title,
                {
                  [styles.titleActive]: location.pathname === path,
                },
              )}
              onClick={() => onClick(path)}
            >
              {extend?.icon && (
                <MenuIcon
                  className={styles.icon}
                  icon={extend.icon}
                />
              )}
              <Box sx={{ ml: 1 }}>{extend?.name}</Box>
              {hasSub && (
                <KeyboardArrowRightRounded className={classNames(styles.arrow, { [styles.arrowIsOpen]: open })} />
              )}
            </ButtonBase>
            {hasSub && routes.length > 1 && (
              <Collapse in={open} sx={{ pl: 2 }}>
                {routes.map((route, i) => (
                  <MenuItem level={level + 1} key={i} {...route} />
                ))}
              </Collapse>
            )}
          </>
        )}
    </Box>
  )
}
