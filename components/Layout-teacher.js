import React from 'react'
import Nav_teacher from './Nav-teacher'
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
      <div className='bg-blue-800 min-h-screen flex'>
        <Nav_teacher/>
      <div className='bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4'>{children}</div>
      </div>
    </>
  )
}
