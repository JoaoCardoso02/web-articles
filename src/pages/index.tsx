import type { NextPage } from "next";
import Head from "next/head";
import SvgBackground from "src/components/SvgBackground";
import Trends from "src/components/Trends";

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
          marginTop: 80
        }}
      >
        <Trends />
      </main>
    </div>
  );
};

export default Home;
