import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Map from './components/map'

const App = () => {
  const [name, setName] = useState('')
  const [des, setDes] = useState('')
  const [image, setImage] = useState('')
  const [qty, setQty] = useState()
  const [price, setPrice] = useState()

  const [product, setProducts] = useState([])


  const handlenewNameChange = (event)=>{
   setName(event.target.value);
  }

  const handleNewDescriptionChange = (event) => {
   setDes(event.target.value);
  }

  const handleNewImageChange = (event) => {
    setImage(event.target.value);
  }

  const handleNewQuantityChange = (event) => {
    setQty(event.target.value);
  }

  const handleNewPriceChange = (event) => {
    setPrice(event.target.value);
  }

  const handleNewProductFormSubmit = (event) => {
    event.preventDefault()
    axios.post(
      'https://safe-oasis-61254.herokuapp.com/store',
      {
        name:name,
        image: image,
        description: des,
        price: price,
        qty: qty

      }
    ).then(() => {
      axios
          .get('https://safe-oasis-61254.herokuapp.com/store')
          .then((response) => {
              setProducts(response.data)
        })
    })
  }

  useEffect(() => {
    axios
      .get('https://safe-oasis-61254.herokuapp.com/store')
      .then((response) => {
        setProducts(response.data)
      })
  })

  return (
    <main>
      <h1>Product Listing</h1>
        <div id="submit-section">
          <h2>List a product to sell</h2>
          {name}
          {des}
          {image}
          {price}
          {qty}
          <form onSubmit={handleNewProductFormSubmit}>
            Name: <input type="text" onChange={handlenewNameChange}/><br/>
            Image: <input type="text" onChange={handleNewImageChange} /><br/>
            Description: <input type="text" onChange={handleNewDescriptionChange} /><br/>
            Price: <input type="text" onChange={handleNewPriceChange} /><br/>
            Quantity: <input type="number" onChange={handleNewQuantityChange} /><br/>
            <input type="submit" value="create product" />
          </form>
        </div>
      <div>
        <h2>Products</h2>
        <Map
        product={product}
        />
      </div>
    </main>
  );
}

export default App;
