import type { SxProps } from '@material-ui/system'
import type { Theme } from '@material-ui/core/styles'

export const createCss = (css: Record<string, SxProps>): Record<string, SxProps> => css