import React, { Fragment, LazyExoticComponent, ComponentType } from 'react'
import { Redirect, Route } from 'react-router-dom'

import { LazySuspense } from './LazySuspense'
import { useAuth } from './AuthProvider'

interface RouteViewProps {
  isPrivate?: boolean
  component?: LazyExoticComponent<any> | ComponentType<any>
  path?: string
  exact?: boolean
  location?: any
}

function PublicView({ location, component: Component, ...props }: RouteViewProps) {
  const { user } = useAuth()
  const from = (location.state || ({} as any)).form || null

  if (user.uid) {
    return <Redirect to={from || '/home'} />
  }

  return (
    <Fragment>
      <LazySuspense>
        {Component && <Component location={location} { ...props } />}
      </LazySuspense>
    </Fragment>
  )
}

function PrivateView({ location, component: Component, ...props }: RouteViewProps) {
  const { user } = useAuth()
  
  if (!user.uid) {
    return <Redirect to="/" />
  }

  return (
    <Fragment>
      <LazySuspense>
        {Component && <Component location={location} { ...props } />}
      </LazySuspense>
    </Fragment>
  )
}

export function RouteView({ isPrivate = true, component, ...rest }: RouteViewProps) {
  return (
    <Route
      {...rest}
      render={props =>
        isPrivate ? (
          <PrivateView component={component} {...props} />
        ) : (
          <PublicView component={component} {...props} />
        )
      }
    />
  )
}
