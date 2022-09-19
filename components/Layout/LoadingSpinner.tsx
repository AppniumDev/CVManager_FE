import { Rings } from 'react-loader-spinner'

const LoadingSpinner = () => {
  return (
    <Rings
      height="120"
      width="120"
      color="#4fa94d"
      radius="6"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="rings-loading"
    />
  )
}

export { LoadingSpinner }
