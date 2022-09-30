import type { AppProps } from 'next/app'
import { wrapper } from '../src/state/store'
import CssBaseline from '@mui/material/CssBaseline'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '../src/utils/apolloClient'
import initAuth from '../src/utils/initiAuth'

// Styles
import '../styles/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// Init auth
initAuth()

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <CssBaseline />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}
export default wrapper.withRedux(App)
