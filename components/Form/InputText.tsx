interface IInputText {
  label: string
  placeholder?: string
  withWrapper?: boolean
}

const InputText = ({
  placeholder,
  withWrapper,
  label,
  ...props
}: IInputText) => {
  const contentRender = (
    <>
      <div className="flex flex-col md:mr-16">
        <label
          htmlFor={label?.toLowerCase()}
          className="mb-2 text-sm font-bold leading-tight tracking-normal text-gray-800"
        >
          {label}
        </label>
        <input
          id={label?.toLowerCase()}
          type="text"
          placeholder={placeholder}
          className="flex items-center w-64 h-10 pl-3 text-sm font-normal text-gray-600 bg-white border border-gray-300 rounded shadow focus:outline-none focus:border focus:border-indigo-700 placeholder:text-gray-400"
          {...props}
        />
      </div>
    </>
  )

  if (withWrapper) {
    return <div className="flex justify-start py-3">{contentRender}</div>
  }

  return contentRender
}

export { InputText }
