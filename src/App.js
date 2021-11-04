import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [name, setName] = useState('')
  const [des, setDes] = useState('')
  const [image, setImage] = useState('')
  const [qty, setQty] = useState()
  const [price, setPrice] = useState()

  const [product, setProduct] = useState([])


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

  useEffect(() => {
    axios
      .get('https://safe-oasis-61254.herokuapp.com/store')
      .then((response) => {
        setProduct(response.data)
      })
  })

  return (
    <div>
      <h1> hello world </h1>
      <div>
        {
          product.map((products) => {
            return (
              <div>
                <h2>{products.name}</h2>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
