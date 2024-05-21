import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainContext from '../../../context/context'

const Detail = () => {
  const {id} = useParams()
  const [productData, setProductData] = useState({})
  const {addToBasket} = useContext(MainContext)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8080/${id}`)
      setProductData(response.data)
    }
    fetchData()
  }, [])
  return (
    <div>
      <div className='detail'>
        <img src={productData.image} alt="" />
        <div className="detail-info">
          <h2>{productData.name}</h2>
          <p>{productData.title}</p>
          <div className='price'>
            <span id='price'>${productData.price}.00</span>
          </div>
          <div className="btn-flex">
               <button onClick={() => addToBasket(productData)}>Add To Basket</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail