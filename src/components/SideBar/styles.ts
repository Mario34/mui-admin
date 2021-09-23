import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    paddingTop: 8,
    paddingBottom: 8,
    borderBottom: 'none',
    listStyle: 'none',
    '&.root': {
      paddingRight: 8,
      paddingLeft: 8,
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
  title: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    padding: 4,
    color: theme.palette.text.primary,
    borderRadius: 8,
    fontSize: 16,
    lineHeight: '24px',
    transition: 'color 100ms, background-color 100ms',
    backgroundColor: 'transparent',
    '&:hover': {
      color: theme.palette.primary.light,
      backgroundColor: theme.palette.action.hover,
    },
  },
  titleActive: {
    backgroundColor: theme.palette.mode === 'dark' ? '#03a9f499' : '#03a9f422',
    color: theme.palette.primary[theme.palette.mode],
    '&:hover': {
      backgroundColor: theme.palette.mode === 'dark' ? '#03a9f499' : '#03a9f422',
      color: theme.palette.primary[theme.palette.mode],
    },
  },
  icon: {
    fontSize: 20,
    padding: '2px',
    color: theme.palette.primary.light,
    borderRadius: 8,
  },
  arrow: {
    marginLeft: 'auto',
    fontSize: 18,
    color: theme.palette.primary[theme.palette.mode],
    transition: 'transform 200ms',
  },
  arrowIsOpen: {
    transform: 'rotate(90deg)',
  },
}))

export const useSubStyles = makeStyles<Theme>((theme) => ({
  group: {
    color: theme.palette.text.secondary,
    padding: '8px 0 8px 12px',
    fontSize: 12,
    fontWeight: 500,
  },
}))
