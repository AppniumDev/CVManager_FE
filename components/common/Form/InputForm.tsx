import { TextField } from '@mui/material'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

const InputForm = <T extends FieldValues>({
  label,
  withWrapper,
  placeholder,
  ...controllerProps
}: UseControllerProps<T> & {
  label: string
  placeholder?: string
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
      />
    </div>
  )
}

export { InputForm }
