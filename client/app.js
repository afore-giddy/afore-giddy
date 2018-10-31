import React from 'react'

import {Navbar, Footer} from './components'
import AllProductList from './components/product/allProductList'

import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <AllProductList /> */}
      <Routes />
      <Footer />
    </div>
  )
}

export default App
