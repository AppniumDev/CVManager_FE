import type { NextPage } from 'next'
import { BaseLayout } from '../components/common/Layout/BaseLayout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <h1>Homepage</h1>
    </BaseLayout>
  )
}

export default Home
