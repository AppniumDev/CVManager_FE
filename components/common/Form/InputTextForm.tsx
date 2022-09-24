import {
  ControllerFieldState,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form'

const getFieldColor = (fieldState: ControllerFieldState) => {
  if (fieldState.isTouched && fieldState.isDirty && fieldState.invalid) {
    return 'error'
  }
  if (fieldState.isTouched && fieldState.isDirty && !fieldState.invalid) {
    return 'success'
  }
  return 'default'
}

const InputTextForm = <T extends FieldValues>({
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

  return (
    <div className={withWrapper ? 'flex justify-start py-6' : 'flex'}>
      <Input
        bordered
        label={label}
        placeholder={placeholder}
        labelPlaceholder={placeholder}
        color={getFieldColor(fieldState)}
        {...field}
      />
    </div>
  )
}

export { InputTextForm }
