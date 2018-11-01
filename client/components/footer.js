import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => (
  <div>
    <h1>FOOTER</h1>
    <div>
      <Link to="/home">Home</Link>
      <Link to="/all-cars">All Products</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/all-cars">All Cars</Link>
    </div>
  </div>
)

export default Footer
