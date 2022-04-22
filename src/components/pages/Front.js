import React from 'react'
import Header from '../header'
import Main from '../main'
import Footer from '../footer'

const Front = () => {
  return (
    <div className='bg-yellow-100 flex-col'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Front