import { useRouter } from 'next/router'

const AssicurazioneDetailPage = () => {
  const router = useRouter()
  const { assicurazioneId } = router.query

  return <p>AssicurazioneDetailPage: {assicurazioneId}</p>
}

export default AssicurazioneDetailPage
