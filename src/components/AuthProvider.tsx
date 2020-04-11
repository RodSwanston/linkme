import React, {
  useState,
  ReactNode,
  useEffect,
  createContext,
  useContext,
  Dispatch,
  SetStateAction
} from 'react'

import { Loading } from './Loading'

import { storage } from '../utils/utils'

interface AuthProviderProps {
  children: ReactNode
}

export interface AuthState {
  token: any
  user: any
  getToken: () => any
  getUser: () => any
}

export interface AuthContextType extends AuthState {
  hasPermission: (permissions: string) => boolean
  logOut: () => void
  setToken: Dispatch<SetStateAction<string>>
  setUser: Dispatch<SetStateAction<any>>
}

const authInitialState: AuthContextType = {
  token: '',
  user: {},
  getToken: async () => await storage.getItem('token') || '',
  getUser: async () => await storage.getItem('user') || {},
  logOut: () => null,
  setToken: () => null,
  setUser: () => null,
  hasPermission: () => false
}

const authContext = createContext<AuthContextType>(authInitialState)

export const useAuth = () => useContext(authContext)

export function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({})
  const [token, setToken] = useState('')

  useEffect(() => {
    storage.setItem('token', token)
    storage.setItem('user', user)
  }, [token, user])

  useEffect(() => {
    if (!loading) return

    async function getInitialState() {
      const token = await authInitialState.getToken()
      const user = await authInitialState.getUser()
      setToken(token)
      setUser(user)
      setLoading(false)
    }

    getInitialState()
  }, [loading])

  const logOut = () => {
    setUser({})
    setToken('')
    storage.clear()
  }

  const value = {
    ...authInitialState,
    logOut,
    user,
    setUser,
    token,
    setToken
  }

  if (loading) return <Loading />

  return <authContext.Provider value={value}>{children}</authContext.Provider>
}

