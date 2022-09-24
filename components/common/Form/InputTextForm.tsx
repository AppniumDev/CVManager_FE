import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

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

  const isErrored =
    fieldState.isTouched && fieldState.isDirty && fieldState.invalid

  const isValid =
    fieldState.isTouched && fieldState.isDirty && !fieldState.invalid

  return (
    <div className={withWrapper ? 'flex justify-start py-6' : 'flex'}>
      <div className="w-full max-w-xs form-control">
        <label className="label">
          <span className="label-text">{label}</span>
          {/* <span className="label-text-alt">Alt label</span> */}
        </label>
        <input
          type="text"
          placeholder={placeholder}
          className={`w-full max-w-xs input input-bordered ${
            isErrored && 'input-error'
          } ${isValid && 'input-success'}`}
          {...field}
        />
        {/* <label className="label">
          <span className="label-text-alt">Alt label</span>
          <span className="label-text-alt">Alt label</span>
        </label> */}
      </div>
    </div>
  )
}

export { InputTextForm }
