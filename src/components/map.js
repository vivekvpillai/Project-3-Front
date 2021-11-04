import React from 'react'

const Map = (props) => {
  return (
    <div id="map section">
      {
        props.product.map((products) => {
          return (
            <div>
              <img src={products.image}/>
              <h2>{products.name}</h2>
              <h3>{products.description}</h3>
              <h2>{products.price}</h2>
              <h2>{products.qty}</h2>

              <button onClick={ (event) => {props.handleDelete(products)}}>Bought!</button>

              <button onClick={ (event) => {props.updateButton(products)}}>Edit</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Map
