import { createContext, useContext, useEffect, useState } from 'react'

const THEME_KEY = 'skillverse-theme'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    return localStorage.getItem(THEME_KEY) || 'light'
  })

  useEffect(() => {
    const value = theme === 'dark' ? 'dark' : ''
    document.documentElement.setAttribute('data-theme', value)
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const setTheme = (newTheme) => {
    if (newTheme === 'dark' || newTheme === 'light') {
      setThemeState(newTheme)
    }
  }

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
