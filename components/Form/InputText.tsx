interface IInputText {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

const InputText = ({ value, onChange, placeholder }: IInputText) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="p-1 text-xs border border-gray-300 rounded placeholder:text-gray-400"
    />
  )
}

export { InputText }
