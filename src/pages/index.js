import { UserButton } from '@clerk/nextjs'
import Head from 'next/head'
import Landing from './Landing'
import Protected from './protected'

export default function Home() {
  return (
    <>
      <Head>
        <title>Trade Hive</title>
        <meta name="description" content="The perfect platform to kick off your trading journey!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className='scroll-smooth'>
        <Landing />
      </main>
    </>
  )
}
export const getServerSideProps = async () => {
  const response=await fetch('http://localhost:3000/api/mongoDB/connection',{
    method:"GET",
    
  })  
  const data=await response
  
  return { props: { } }
}