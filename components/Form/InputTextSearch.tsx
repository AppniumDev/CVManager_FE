import { ChangeHandler } from 'react-hook-form'

interface IInputTextSearch {
  onChange: (value: string) => void
  value: string
  placeholder?: string
}

const InputTextSearch = ({
  value,
  onChange,
  placeholder,
}: IInputTextSearch) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="p-1 text-xs border border-gray-300 rounded placeholder:text-gray-400 placeholder:font-light"
    />
  )
}

export { InputTextSearch }
