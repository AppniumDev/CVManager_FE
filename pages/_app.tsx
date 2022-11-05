import type { AppProps } from 'next/app'
import { wrapper } from '../src/state/store'
import CssBaseline from '@mui/material/CssBaseline'

// Styles
import '../styles/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../src/utils/apolloClient'

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)

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
