const HeaderTop = () => {
  return (
    <div className="w-full">
      {/* Navigation starts */}
      <nav className="relative z-10 flex items-center justify-end h-16 bg-white shadow lg:items-stretch lg:justify-between">
        <div className="hidden w-full pr-6 lg:flex">
          <div className="items-center hidden w-1/2 h-full pl-6 pr-24 lg:flex">
            <div className="relative w-full">
              <div className="absolute inset-0 w-4 h-4 m-auto ml-4 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-search"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx={10} cy={10} r={7} />
                  <line x1={21} y1={21} x2={15} y2={15} />
                </svg>
              </div>
              <input
                className="w-full py-2 pl-12 text-sm text-gray-500 bg-gray-100 border border-gray-100 rounded focus:outline-none focus:border-indigo-700"
                type="text"
                placeholder="Cerca veicolo..."
              />
            </div>
          </div>
          <div className="hidden w-1/2 lg:flex">
            <div className="flex items-center justify-end w-full pl-8">
              <div className="flex items-center justify-center w-20 h-full border-l border-r">
                <div className="relative text-gray-600 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-bell"
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                  </svg>
                  <div className="absolute inset-0 w-2 h-2 m-auto mt-1 mr-1 bg-red-400 border border-white rounded-full" />
                </div>
              </div>
              <div className="relative flex items-center cursor-pointer">
                <p className="mx-3 text-sm text-gray-800">Amministratore</p>
                <div className="text-gray-600 cursor-pointer">
                  <svg
                    aria-haspopup="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-down"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative visible mr-8 text-gray-600 lg:hidden">
          <svg
            aria-label="Main Menu"
            aria-haspopup="true"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer icon icon-tabler icon-tabler-menu"
            width={30}
            height={30}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1={4} y1={8} x2={20} y2={8} />
            <line x1={4} y1={16} x2={20} y2={16} />
          </svg>
        </div>
      </nav>
    </div>
  )
}

export { HeaderTop }
