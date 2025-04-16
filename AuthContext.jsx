import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../services/supabaseClient'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const session = supabase.auth.getSession()
    session.then(({ data }) => setUser(data.session?.user ?? null))

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  const value = { user, supabase }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)