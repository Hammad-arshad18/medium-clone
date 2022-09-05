import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../Components/Header";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Medium Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Main Body */}

      <div className="flex h-80 justify-around bg-yellow-400 py-10 lg:py-0 items-center border-y border-black">
        <div className='px-10 space-y-4'>
          <h1 className='text-5xl mx-w-xl'><span className={"underline decoration-4"}>Medium</span> is a place to write, read & connect.</h1>
          <h2>Discover stories, thinking, and expertise from writers on any topic.</h2>
        </div>
        <img className='hidden md:inline-flex h-32 h-lg-full' src="https://freesvg.org/img/Cyrillic-M.png" alt="" />
      </div>


    </div>
  )
}

export default Home
