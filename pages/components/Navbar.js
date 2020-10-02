import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div className="bg-secondary flex-auto">
      <Link href="/">
        <a className="text-2xl align-middle m-2 text-white">Home</a>
      </Link>
    </div>
  )
}