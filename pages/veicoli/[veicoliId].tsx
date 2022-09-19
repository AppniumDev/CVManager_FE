import { useRouter } from 'next/router'
import { BaseLayout } from '../../components/BaseLayout'

const VeicoliDetailPage = () => {
  const router = useRouter()
  const { veicoliId } = router.query

  return (
    <BaseLayout>
      <p>VeicoliDetailPage: {veicoliId}</p>
    </BaseLayout>
  )
}

export default VeicoliDetailPage