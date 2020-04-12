import React, {
  useState,
  ReactNode,
  useEffect,
  createContext,
  useContext
} from 'react'

import { Loading } from './Loading'

import { storage } from '../utils/utils'

interface AuthProviderProps {
  children: ReactNode
}

export interface AuthState {
  user: any
  getUser: () => any
}

export interface AuthContextType extends AuthState {
  hasPermission: (permissions: string) => boolean
  logOut: () => void
  setUser: Function
}

const authInitialState: AuthContextType = {
  user: {},
  getUser: async () => await storage.getItem('user') || {},
  logOut: () => null,
  setUser: () => null,
  hasPermission: () => false
}

const authContext = createContext<AuthContextType>(authInitialState)

export const useAuth = () => useContext(authContext)

export function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(true)
  const [user, setUserState] = useState({})

  useEffect(() => {
    if (!loading) return
    
    async function getInitialState() {
      const userData = await authInitialState.getUser()
      console.log(2, userData)
      setUserState(userData)
      storage.setItem('user', userData)
      setLoading(false)
    }

    getInitialState()
  }, [loading])

  const logOut = () => {
    setUserState({})
    storage.clear()
  }

  const setUser = (user: any) => {
    setUserState(user)
    storage.setItem('user', user)
  }

  const value = {
    ...authInitialState,
    logOut,
    user,
    setUser
  }

  if (loading) return <Loading />

  return <authContext.Provider value={value}>{children}</authContext.Provider>
}

