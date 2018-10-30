import React from 'react'

import {Navbar} from './components'
import AllProductList from './components/product/allProductList'

import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <AllProductList />
      <Routes />
    </div>
  )
}

export default App
