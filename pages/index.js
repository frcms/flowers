import Head from 'next/head'
import Navbar from './components/Navbar'

export default function Index() {
  return (
    <>
      <Navbar />
      <div className="block w-auto m-0">
        <h1 className="text-4xl text-center">You're not logged in!</h1>
      </div>
    </>
  )
}
