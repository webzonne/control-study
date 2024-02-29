import React from 'react'
import Nav_student from './Nav-student'
import Head from 'next/head'

export default function Layout({children}) {
  return (
    <>
     <Head>
        <title>CONTROL DE ESTUDIO</title>
        <meta name="description" content="tienda virtual" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-blue-500 min-h-screen flex'>
        <Nav_student/>
      <div className='bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4'>{children}</div>
      </div>
    </>
  )
}
