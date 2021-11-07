import React from 'react'

const Search = ({handleSearch}) => {
  return(
    <div>
    {
      currentUser ?
      (currentUser.username === products.sellername
      ?
      <div>
      <button onClick={ (event) => {props.handleDelete(products)}}>Bought!</button>

      <a href="#open-modal">
      <button onClick={ (event) => {props.updateButton(products)}}>Edit</button>
      </a>
      </div>
      : null)
      : null}
    </div>
  )
}

export default Search
