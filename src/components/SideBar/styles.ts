import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

export const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    borderBottom: 'none',
    listStyle: 'none',
  },
  title: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    padding: 4,
    color: grey[300],
    fontSize: 16,
    lineHeight: '42px',
    transition: 'color 60ms, background-color 60ms',
    backgroundColor: 'transparent',
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: 'rgba(0, 0, 0, 0.01)',
    },
  },
  titleActive: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  },
  icon: {
    fontSize: 20,
    padding: '2px',
    color: grey[400],
    borderRadius: 8,
  },
  arrow: {
    marginLeft: 'auto',
    fontSize: 18,
    color: grey[400],
    transition: 'transform 200ms',
  },
  arrowIsOpen: {
    transform: 'rotate(90deg)',
  },
}))
