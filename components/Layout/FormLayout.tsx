interface IFormLayout {
  title: string
  children: JSX.Element
}

const FormLayout = ({ title, children }: IFormLayout) => {
  return (
    <div className="flex justify-center">
      <div className="flex w-10/12 bg-white rounded shadow-xl">
        <div className="w-full px-6">
          <div className="flex w-full py-5 mb-5 border-b border-gray-200">
            <div className="flex items-center w-11/12">
              <p className="pt-1 text-lg font-bold text-indigo-700 uppercase">
                {title}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <form className="w-full px-4 my-2">{children}</form>
          </div>
        </div>
      </div>
    </div>
  )
}

export { FormLayout }
