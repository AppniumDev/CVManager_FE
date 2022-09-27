import { SideMenu } from './SideMenu'
import Head from 'next/head'
import { HeaderTop } from './HeaderTop'
import { ModalSwitcher } from '../ModalSwitcher/ModalSwitcher'
import { createTheme, ThemeProvider } from '@mui/material'
import { itIT } from '@mui/x-data-grid'
import { itIT as pickersItIT } from '@mui/x-date-pickers'
import { itIT as coreItIT } from '@mui/material/locale'

const BaseLayout = ({ children }: any) => {
  const theme = createTheme(
    {
      palette: {
        primary: { main: '#1976d2' },
      },
    },
    itIT, // x-data-grid translations
    pickersItIT, // x-date-pickers translations
    coreItIT // core translations
  )

  return (
    <>
      <Head>
        <title>Cuccato Veicoli Manager</title>
        <meta name="description" content="Cuccato Veicoli Manager" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <div className="flex flex-no-wrap bg-gray-200">
          {/* Sidemenu starts */}
          <SideMenu />

          <div className="flex flex-col w-full h-screen overflow-y-auto">
            <HeaderTop />

            <div className="container w-11/12 h-64 py-10 mx-auto md:w-4/5">
              {children}
            </div>

            <ModalSwitcher />
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export { BaseLayout }
