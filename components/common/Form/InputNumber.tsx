interface IInputNumber {
  value: number
  onChange: (value: number) => void
  placeholder?: string
}

const InputNumber = ({ value, onChange, placeholder }: IInputNumber) => {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value))}
      placeholder={placeholder}
    />
  )
}

export { InputNumber }
