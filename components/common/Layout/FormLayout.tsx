import { Typography } from '@mui/material'

interface IFormLayout {
  title: string
  width: string
  additionalClassname: string
  children: JSX.Element
}

const FormLayout = ({
  title,
  children,
  width = 'w-8/12',
  additionalClassname = '',
}: IFormLayout) => {
  return (
    <div
      className={`flex items-center justify-center mt-20 ${additionalClassname}`}
    >
      <div className={`flex ${width} p-6 bg-white shadow-xl rounded-xl`}>
        <div className="w-full px-6">
          <div className="flex w-full py-5 mb-5 border-b border-gray-200">
            <div className="flex items-center w-11/12">
              <Typography id="modal-title" variant="h5" component="h1">
                {title}
              </Typography>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full px-4">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { FormLayout }
