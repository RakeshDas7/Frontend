import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Product from './Product.jsx'
import products from './products.js'
import './App.css'

function App() {

  // console.log(products)
  // const x = products.map((p, idx) => {
  //   // console.log(idx, p)
  //   return <Product brand={p.brand} price={p.price} description={p.description}/>
  // })
  return (
    <>
      {/* { Product() } */}
      {/* <Product></Product> */}

      {/* <Product abc="xyz" brand="Adidas" price="3999.99" description="Very Good Shoes" /> {/* here abc is the key and xyz is value "
      <Product brand="Nike" price="2999.99" />
      <Product brand="U S Polo Assgn" price="6999.99" /> */}

      {
        // for (let i = 0; i < products.length; i++) {          
        // }

        // console.log(products.map((p, idx) => {
        //   // console.log(idx, p)
        //   return <Product brand={p.brand} price={p.price} description={p.description}/>
        // }))

        
        products.map((p, idx) => {return <Product brand={p.brand} price={p.price} description={p.description} key={idx}/>})
      }

    </>
  )
}

export default App
