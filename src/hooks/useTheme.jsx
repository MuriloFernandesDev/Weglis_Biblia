import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({})

export function ThemeProvider({ children }) {
  //estado para armazenar e controlar o tema
  const [theme, useTheme] = useState('light')
  const [loadingTheme, useLoadingTheme] = useState(true)

  //função para alterar o tema
  const changeTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark')
      useTheme('dark')
    } else {
      localStorage.setItem('theme', 'light')
      useTheme('light')
    }
  }

  //verifica se o tema está salvo no localStorage
  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (localTheme) {
      useTheme(localTheme)
    } else {
      localStorage.setItem('theme', 'light')
      useTheme('light')
    }

    setTimeout(() => {
      useLoadingTheme(false)
    }, 1000)
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        changeTheme,
        theme,
        loadingTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  return context
}
