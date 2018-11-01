import React from 'react'

import {Navbar, Footer, MainPage, SingleReviewCard} from './components'
import AllProductList from './components/product/allProductList'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
