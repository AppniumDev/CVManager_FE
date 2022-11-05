import { InputAdornment, TextField } from '@mui/material'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

const InputForm = <T extends FieldValues>({
  label,
  withWrapper,
  placeholder,
  money,
  ...controllerProps
}: UseControllerProps<T> & {
  label: string
  placeholder?: string
  money?: boolean
  withWrapper?: boolean
}) => {
  const { field, fieldState } = useController(controllerProps)

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
        {...field}
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
