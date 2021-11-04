import {useState, useEffect} from 'react'
import axios from 'axios'
import Map from './components/map'

const App = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [qty, setQty] = useState()
  const [price, setPrice] = useState()

  const [product, setProducts] = useState([])

  const [editName, setEditName] = useState('')
  const [editDescription, setEditDescription] = useState('')
  const [editImage, setEditImage] = useState('')
  const [editQty, setEditQty] = useState()
  const [editPrice, setEditPrice] = useState()
  const [id, setId] = useState('')

  const handlenewNameChange = (event)=>{
    setName(event.target.value);
    setEditName(event.target.value)
  }

  const handleNewDescriptionChange = (event) => {
    setDescription(event.target.value)
    setEditDescription(event.target.value)
  }

  const handleNewImageChange = (event) => {
    setImage(event.target.value)
    setEditImage(event.target.value)
  }

  const handleNewQuantityChange = (event) => {
    setQty(event.target.value)
    setEditQty(event.target.value)
  }

  const handleNewPriceChange = (event) => {
    setPrice(event.target.value)
    setEditPrice(event.target.value)
  }

  const handleNewProductFormSubmit = (event) => {
    event.preventDefault()
    axios.post(
      'https://safe-oasis-61254.herokuapp.com/store',
      {
        name:name,
        image: image,
        description: description,
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

  const handleUpdatesToProduct = (e) => {
    e.preventDefault()
    axios
    .put(
      `https://safe-oasis-61254.herokuapp.com/store/${id}`,
        {
          name:editName,
          image:editImage,
          description:editDescription,
          price:editPrice,
          qty:editQty
        }
    )
    .then(()=> {
      axios
          .get('https://safe-oasis-61254.herokuapp.com/store')
          .then((response) => {
            setProducts(response.data)
          })
    })
  }

  const updateButton = (productData) => {
    setEditName(productData.name)
    setEditImage(productData.image)
    setEditDescription(productData.description)
    setEditPrice(productData.price)
    setEditQty(productData.qty)
    setId(productData._id)
  }

  const handleDelete = (productData)=> {
    axios
        .delete(`https://safe-oasis-61254.herokuapp.com/store/${productData._id}`)
        .then(()=> {
          axios
              .get('https://safe-oasis-61254.herokuapp.com/store')
              .then((response)=>{
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
    <header>
      <div className="header-container">
        <h2 className="header-words">
          <span id="left">Quick Cash</span>
          <div id="sell-link">
            <span id='right'>
              <a href="#open-create-modal">Sell</a>
            </span>
          </div>
        </h2>
      </div>
    </header>
      <div id="open-create-modal" className="modal">
        <div className="modal-text">
          <h2>List a product to sell</h2>
          <form onSubmit={handleNewProductFormSubmit}>
            Name: <input type="text" onChange={handlenewNameChange}/><br/>
            Image: <input type="text" onChange={handleNewImageChange} /><br/>
            Description: <input type="text" onChange={handleNewDescriptionChange} /><br/>
            Price: <input type="number" min='0' onChange={handleNewPriceChange} /><br/>
            Quantity: <input type="number" min='0' onChange={handleNewQuantityChange} /><br/>
            <input type="submit" value="create product" />
          </form>
          <a href="#" class="close-modal">Close</a>
        </div>
      </div>

      <div id="open-edit-modal" className="modal">
        <div className="modal-text">
          <form onSubmit={handleUpdatesToProduct}>
              Name: <input type="text" onChange={handlenewNameChange} value={editName}/><br/>
              Image: <input type="text" onChange={handleNewImageChange} value={editImage}/><br/>
              Description: <input type="text" onChange={handleNewDescriptionChange} value={editDescription}/><br/>
              Price: <input type="number" min='0' onChange={handleNewPriceChange} value={editPrice}/><br/>
              Quantity: <input type="number" min='0' onChange={handleNewQuantityChange} value={editQty}/><br/>
              <input type="submit" value="edit product"/>
            </form>
            <a href="#" class="close-modal">Close</a>
          </div>
        </div>

        <div id="product listing">
          <h2>Products</h2>
          <Map
          product={product}
          handleDelete={handleDelete}
          handleUpdatesToProduct={handleUpdatesToProduct}
          updateButton={updateButton}
          />
        </div>
    </main>
  );
}

export default App;
