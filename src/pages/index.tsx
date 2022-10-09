import type { NextPage } from "next";
import Head from "next/head";
import Card from "src/components/Card";
import PrincipalCard from "src/components/PrincipalCard";
import SvgBackground from "src/components/SvgBackground";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Articles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SvgBackground />
      <main
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: 48,
          marginTop: 72
        }}
      >
        <PrincipalCard
          author={{
            name: 'Michael Scott',
            date: '03 sep 2022',
            image: 'https://images.unsplash.com/photo-1662225329467-09ab9ce0b1b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80'
          }}
          title='How to take photos better using a camera'
          image='https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        />
        <div>
          <Card
            author={{
              name: 'Michael Scott',
              date: '03 sep 2022',
              image: 'https://images.unsplash.com/photo-1662225329467-09ab9ce0b1b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80'
            }}
            title='Using Photoshop to improve photos'
            image='https://images.unsplash.com/photo-1662228733856-9d74f97804a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80'
            style={{ marginBottom: 12 }}
          />
          <Card
            author={{
              name: 'Michael Scott',
              date: '03 sep 2022',
              image: 'https://images.unsplash.com/photo-1662225329467-09ab9ce0b1b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80'
            }}
            title='How to improve your photos using your cellphone'
            image='https://images.unsplash.com/photo-1662228733856-9d74f97804a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80'
            style={{ marginBottom: 12 }}
          />
          <Card
            author={{
              name: 'Michael Scott',
              date: '03 sep 2022',
              image: 'https://images.unsplash.com/photo-1662225329467-09ab9ce0b1b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80'
            }}
            title='Learn how to use camera lens'
            image='https://images.unsplash.com/photo-1662228733856-9d74f97804a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80'
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
