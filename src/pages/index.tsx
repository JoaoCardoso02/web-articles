import type { NextPage } from 'next'
import Head from 'next/head'
import Card from 'src/components/Card'
import Header from 'src/components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Articles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
				<Card
					author={{
						name: 'João Lucas',
						date: '04 sep 2022',
						image: 'https://images.unsplash.com/photo-1662225329467-09ab9ce0b1b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80'
					}}
					title='Something that I like'
					image='https://images.unsplash.com/photo-1662228733856-9d74f97804a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80'
				/>
      </main>
    </div>
  )
}

export default Home
