import React from 'react'

const Map = (props) => {
  return (
    <div>
      {
        props.product.map((products) => {
          return (
            <div>
              <img src={products.image}/>
              <br/>
              <h2>{products.name}</h2>
              <br/>
              <h3>{products.description}</h3>
              <br/>
              <h2>{products.price}</h2>
              <br/>
              <h2>{products.qty}</h2>
              <br/>
            </div>
          )
        })
      }
    </div>
  )
}

export default Map
