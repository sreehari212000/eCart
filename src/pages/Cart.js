import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../css/cart.css"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {removeItem, toggleItems, clearCart, calculateTotal} from '../redux/cartSlice'
import { Link } from 'react-router-dom';

const Cart = () => {
  const {cartItems, noOfCartItems, totalMoney} = useSelector((state)=>state.cart)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(calculateTotal())
  }, [cartItems])


  if(cartItems.length === 0){
    return (
      <div className="empty-cart">
        <h1>You cart is currently empty!</h1>
        <Link className='btn' to='/'>Shop Now</Link>
      </div>
    )
  }
  return (
    <div className='cart'>
      <button className='clear' onClick={()=>dispatch(clearCart())}>clear cart</button>
      {cartItems.map((cartItem)=>{
        const {image, title, description, id, price} = cartItem
        return (
          <div className='item-container' key={id}>
            <img className='prod-img' src={image} alt="" />
            <div className="prod-right">
              <h3>{title}</h3>
              <h5>$ {price}</h5>
              <p className='dis'>{`${description.slice(0, 60)}...`}</p>
              <div className="qty">
                <div className='increment-btn'>
                <ExpandMoreIcon onClick={()=>{if(noOfCartItems === 1){
                  dispatch(removeItem(id))
                }else{
                  dispatch(toggleItems({act:'DECREMENT', id}))
                }
                }}/>
                </div>
                <p>Qty: {cartItem.quantity}</p>
                <div className='increment-btn'>
                <ExpandLessIcon onClick={()=>dispatch(toggleItems({act:'INCREMENT', id}))}/>
                </div>
              </div>
              <button className='remove-btn' onClick={()=>dispatch(removeItem(id))}>remove</button>
            </div>
          </div>
        )
      })}
      <div className="underline"></div>
      <h2 className='total'>Total : $ {totalMoney}</h2>
    </div>
  )
}

export default Cart