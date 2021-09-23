import React, { useState } from 'react'
import { Box, Collapse, ButtonBase } from '@material-ui/core'
import { KeyboardArrowRightRounded } from '@material-ui/icons'
import classNames from 'classnames'
import { useStyles, useSubStyles } from './styles'
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom'

import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'

type SvgIconComponent = typeof SvgIcon

export interface MenuItemProps extends Record<string, any> {
  name?: string | undefined
  icon?: SvgIconComponent | undefined
  path: string
  subMenu?: SubMenuItemProps[]
  level: number
}

export interface SubMenuItemProps extends Record<string, any> {
  group?: string
  menu: MenuItemProps[]
}

const MenuIcon = ({ icon, ...props }: { icon: SvgIconComponent } & SvgIconProps) => {
  return React.createElement(icon, props)
}

export const MenuItem: React.FC<MenuItemProps> = ({
  level,
  path,
  icon,
  name,
  subMenu,
}) => {
  const [open, setOpen] = useState(false)
  const history = useHistory()
  const location = useLocation()
  const styles = useStyles()
  const hasSub = !!subMenu?.length

  const onClick = () => {
    if (hasSub) {
      setOpen((val) => !val)
    } else {
      history.push(path)
    }
  }
  const match = useRouteMatch(path)

  React.useEffect(() => {
    setOpen(!!match)
  }, [location.pathname])

  return (
    <Box className={classNames(styles.root, { root: level === 1 })}>
      <ButtonBase
        disableRipple
        className={classNames(
          styles.title,
          {
            [styles.titleActive]: location.pathname === path && !hasSub,
          },
        )}
        onClick={onClick}
      >
        {icon && (
          <MenuIcon
            className={styles.icon}
            icon={icon}
          />
        )}
        <Box sx={{ ml: 1 }}>{name}</Box>
        {hasSub && (
          <KeyboardArrowRightRounded className={classNames(styles.arrow, { [styles.arrowIsOpen]: open })} />
        )}
      </ButtonBase>
      <Collapse in={open} sx={{ pl: 2 }}>
        {subMenu?.map(({ group, menu }, i) => (
          <SubMenuItem level={level} key={i} {...{ group, menu }} />
        ))}
      </Collapse>
    </Box>
  )
}

export const SubMenuItem: React.FC<{ level: number } & SubMenuItemProps> = ({
  group,
  menu,
  level,
}) => {
  const styles = useSubStyles()
  return (
    <>
      <Box className={styles.group}>{group}</Box>
      {menu?.map(props => (
        <MenuItem key={props.path} {...props} level={level + 1} />
      ))}
    </>
  )
}
