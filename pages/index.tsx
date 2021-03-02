import { Jokes } from "../src/Jokes";
import Head from 'next/head';

export default function Home() {  
    return (
      <>
        <Head>
          <title>ChuckNorris API - NEXT - </title>
        </Head>

          <Jokes/>
      </>
  )
}
