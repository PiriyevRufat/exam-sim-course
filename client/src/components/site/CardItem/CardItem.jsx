import React, { useContext, useState } from 'react'
import MainContext from '../../../context/context'
import { Link, useNavigate } from 'react-router-dom'
const CardItem = ({item}) => {
    const [data,setData]=useState([])
    const {addToBasket}=useContext(MainContext)
    const navigate = useNavigate()
  return (
    <div className='col-4'>
      <div className='mycard-img'>
      <a href=""><img src={item.image} width="370px" height="220px" alt="" /></a>
      </div>
      <div className='my-card-text'>
      <a href=""><h4>{item.name}</h4></a>
      <a href=""><p>{item.subtitle}</p></a>
      <p>{item.price}</p>
      <i onClick={() => navigate(`${item._id}`)} className="fa-solid fa-eye"></i><br />
      <button onClick={() => addToBasket(item)} className='btn btn-primary'>Add to Basket</button>
      </div>
    </div>
  )
}

export default CardItem