import type { AppProps } from 'next/app'
import { wrapper } from '../src/state/store'
import CssBaseline from '@mui/material/CssBaseline'
import '../styles/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}
export default wrapper.withRedux(MyApp)
