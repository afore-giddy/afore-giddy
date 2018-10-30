import React from 'react'

import {Navbar, allProductList} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <allProductList />
      <Routes />
    </div>
  )
}

export default App
