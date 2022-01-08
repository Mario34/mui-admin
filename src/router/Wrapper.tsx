import React from 'react'
import type { AuthWrapperType } from './'

/**
 * 这里用来处理路由的前置
*/
export const AuthWrapper: AuthWrapperType = (props) => {
  return (
    <>
      {props.children}
    </>
  )
}
