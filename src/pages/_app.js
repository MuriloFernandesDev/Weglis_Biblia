import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from '../hooks/useTheme'
import '../styles/animate.min.scss'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Application */}
      <ThemeProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
