'use client'

import React, { createContext, useState } from 'react'
import { User } from '@/payload-types'
import { AuthContextType } from '@/types/auth'

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({
  children,
  initialUser = null,
}: {
  children: React.ReactNode
  initialUser?: User | null
}) => {
  const [user, setUser] = useState<User | null>(initialUser)

  const logout = async () => {
    await fetch('/api/logout', {
      method: 'POST',
    })

    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        setUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
