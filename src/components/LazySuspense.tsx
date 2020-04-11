import React, { Suspense, ReactNode } from 'react'
import { Loading } from './Loading'

interface LazyProps {
  children?: ReactNode
  fallback?: ReactNode
}

export function LazySuspense({ fallback, children }: LazyProps) {
  return <Suspense fallback={fallback || <Loading />}>
    {children}
  </Suspense>
}