import type { NextPage } from 'next'
import Head from 'next/head'
import SvgBackground from 'src/components/SvgBackground'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Articles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SvgBackground />
      <main style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
      </main>
    </div>
  )
}

export default Home
