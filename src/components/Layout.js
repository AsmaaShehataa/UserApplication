import React from 'react'
import Header from './Header'

const Layout = ({childern}) => {
  return (
    <>
        <Header/>
        <div className="container">
        {childern}
        </div>
    </>
  )
}

export default Layout