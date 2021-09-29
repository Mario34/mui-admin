import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import type { CustomRouteConfig } from './'

interface RouterViewProps {
  routes: CustomRouteConfig[]
  notFound: React.ReactNode | JSX.Element
}

const RouterView: React.FC<RouterViewProps> = ({ routes, notFound }) => {
  return (
    <Switch>
      {routes.map((route, i) => {
        return (
          <Route
            key={route.path || i}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={props => {
              if (route.redirect) {
                return <Redirect to={route.redirect} />
              }
              // TODO: 优化
              document.title = `${route?.extend?.name}-MUI+`
              if (route.component) {
                if (route.wrappers) {
                  return (
                    <route.wrappers key={route.path || i} route={route}>
                      <route.component {...props} route={route}>
                        {route.routes?.length && (
                          <RouterView notFound={notFound} routes={route.routes} />
                        )}
                      </route.component>
                    </route.wrappers>
                  )
                }
                return (
                  <route.component {...props} route={route}>
                    {route.routes?.length && (
                      <RouterView notFound={notFound} routes={route.routes} />
                    )}
                  </route.component>
                )
              } else if (route.routes?.length) {
                return (
                  <RouterView notFound={notFound} routes={route.routes} />
                )
              }
              return null
            }}
          />
        )
      })}
      {notFound}
    </Switch>
  )
}

export default RouterView