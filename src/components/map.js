import React from 'react'

const Map = (props) => {
  return (
    <div id="map-section">
      {
        props.product.map((products) => {
          return (
            <div>
              <img className="prodimg" src={products.image}/>
              <h2 className="interesting">{products.name}</h2>
              <h3>{products.description}</h3>
              <h2>{products.price}</h2>
              <h2>{products.qty}</h2>

              <button onClick={ (event) => {props.handleDelete(products)}}>Bought!</button>

              <a href="#open-edit-modal">
              <button onClick={ (event) => {props.updateButton(products)}}>Edit</button>
              </a>
            </div>
          )
        })
      }
    </div>
  )
}

export default Map
