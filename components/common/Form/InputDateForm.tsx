import { TextField } from '@mui/material'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

const InputDateForm = <T extends FieldValues>({
  label,
  withWrapper,
  placeholder,
  required,
  ...controllerProps
}: UseControllerProps<T> & {
  label: string
  placeholder?: string
  withWrapper?: boolean
  required?: boolean
}) => {
  const { field } = useController(controllerProps)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={withWrapper ? 'flex justify-start py-6' : 'flex'}>
        <DatePicker
          label={label}
          renderInput={(params) => (
            <TextField {...params} required={required} />
          )}
          {...field}
          value={field.value || null}
        />
      </div>
    </LocalizationProvider>
  )
}

export { InputDateForm }
