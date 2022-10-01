import { SideMenu } from './SideMenu'
import Head from 'next/head'
import { HeaderTop } from './HeaderTop'
import { PrimaryModalSwitcher } from '../ModalSwitcher/PrimaryModalSwitcher'
import { SecondaryModalSwitcher } from '../ModalSwitcher/SecondaryModalSwitcher'
import { createTheme, ThemeProvider } from '@mui/material'
import { itIT } from '@mui/x-data-grid'
import { itIT as pickersItIT } from '@mui/x-date-pickers'
import { itIT as coreItIT } from '@mui/material/locale'

const BaseLayout = ({ children }: any) => {
  const theme = createTheme(
    {
      palette: {
        primary: { main: '#6365f1' },
        secondary: { main: '#e3af54' },
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

            {/* Modals switchers */}
            <PrimaryModalSwitcher />
            <SecondaryModalSwitcher />
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export { BaseLayout }
