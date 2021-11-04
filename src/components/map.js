import React from 'react'

const Map = (props) => {
  return (
    <div>
      {
        props.product.map((products) => {
          return (
            <div>
              <h2>{products.name}</h2>
            </div>
          )
        })
      }
    </div>
  )
}

export default Map
