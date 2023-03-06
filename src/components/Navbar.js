import "../css/navbar.css"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { ProductContext } from "../context/productContext"
import Tooltip from '@mui/material/Tooltip';

function Navbar(){
    const navigate = useNavigate()
    const {noOfCartItems} = useSelector(state => state.cart)
    const {categories} = useContext(ProductContext)

    return (
        <div className="navbar">
            <div className="nav-logo">
               <Link className="logo" to='/'><p>eCART</p></Link> 
            </div>

            
            <div className="categories">
                {categories.map((category, indx)=>{
                    return (
                        <Link key={indx} className="link" to={`/categories/${category}`}>{category}</Link>
                    )
                })}
            </div>              

            <div className="account-info">
                <Tooltip title='Go to cart'>
                <Badge badgeContent={noOfCartItems} color="warning" ><ShoppingCartOutlinedIcon sx={{cursor:'pointer'}} onClick={()=>navigate('/cart')}/></Badge>
                </Tooltip>
                <PermIdentityIcon />
            </div>
        </div>
    )
}

export default Navbar