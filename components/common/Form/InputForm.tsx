import { InputAdornment, TextField } from '@mui/material'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

const InputForm = <T extends FieldValues>({
  label,
  withWrapper,
  placeholder,
  money,
  required,
  ...controllerProps
}: UseControllerProps<T> & {
  label: string
  placeholder?: string
  money?: boolean
  withWrapper?: boolean
  required?: boolean
}) => {
  const propsController = useController(controllerProps)

  const { field, fieldState } = propsController

  const isErrored =
    fieldState.isTouched && fieldState.isDirty && fieldState.invalid

  return (
    <div className={withWrapper ? 'flex justify-start py-6' : 'flex'}>
      <TextField
        label={label}
        placeholder={placeholder}
        variant="outlined"
        defaultValue={field.value}
        error={isErrored}
        helperText={isErrored ? fieldState.error?.message : ''}
        required={required}
        {...field}
        onChange={(e) => {
          const value = e.target.value
          console.log('value', {
            value,
            checkDot: value.charAt(value.length - 1),
            checkComma: value.charAt(value.length - 1),
          })

          if (money) {
            field.onChange(parseFloat(value.replace(",", ".")))
          } else {
            field.onChange(value)
          }
        }}
        inputRef={field.ref}
        type={money ? 'number' : 'text'}
        InputProps={
          money
            ? {
                startAdornment: (
                  <InputAdornment position="start">€</InputAdornment>
                ),
              }
            : {}
        }
      />
    </div>
  )
}

export { InputForm }
