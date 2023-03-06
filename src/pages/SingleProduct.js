import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "../css/singleproduct.css"
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import {addToCart} from "../redux/cartSlice"


const SingleProduct = () => {
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState(null)
  const {id} = useParams()
  const dispatch = useDispatch()

    useEffect(()=>{
      const getSingleProduct = async ()=>{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response.json()
        setItem(data)
        setLoading(false)
      }

      getSingleProduct()
    }, [])


  if(loading){
    return (
      <Box sx={{ display: 'flex' , height:'100vh' ,justifyContent:'center', alignItems:'center'}}>
        <CircularProgress />
      </Box>
    );
  }
  const {image, rating, title, price, description} = item
  return (
    <div className="single-product">
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <div className="details-container">
          <h3>{title}</h3>
          <div className="rating">
            <p>{rating.rate} <span><StarOutlinedIcon sx={{height:'13px'}}/></span></p>
            <p>{rating.count} pieces left</p>
          </div>

          <div className="price">
            <h5>$ {price}</h5>
            <p>inclusive of all taxes</p>

            <p className='desc'>{description}</p>
          </div>

          <div className="btn-container">
            <button className='addtocart' onClick={()=>dispatch(addToCart({
              image, price, title, description, quantity:1, id
            }))}> <ShoppingCartOutlinedIcon />ADD TO CART</button>
          </div>
      </div>
    </div>
  )
}

export default SingleProduct