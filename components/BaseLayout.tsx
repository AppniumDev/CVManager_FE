import { SideMenu } from './SideMenu'
import Head from 'next/head'
import { HeaderTop } from './HeaderTop'

const BaseLayout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Cuccato Veicoli Manager</title>
        <meta name="description" content="Cuccato Veicoli Manager" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-no-wrap bg-gray-200">
        {/* Sidebar starts */}

        <SideMenu />

        <div className="flex flex-col w-full h-screen overflow-y-auto">
          <HeaderTop />

          <div className="container w-11/12 h-64 px-6 py-10 mx-auto md:w-4/5">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export { BaseLayout }
