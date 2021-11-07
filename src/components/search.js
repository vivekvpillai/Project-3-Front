import React from 'react'

const Search = ({handleSearch}) => {
  const onChange = (e) => {
    handleSearch(e.target.value)
    console.log(handleSearch(e.target.value));
  }
  return(
    <div>
      <input type="text" onChange={onChange}/>
    </div>
  )
}

export default Search
