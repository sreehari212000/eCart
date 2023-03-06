import React, { useContext, useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { ProductContext} from '../context/productContext'

import "../css/homepage.css"
import { Link, useNavigate } from 'react-router-dom';

const Homepage = () => {
    const {products, loading, categories } = useContext(ProductContext)
    const navigate = useNavigate()
    if(loading){
        return (
            <Box sx={{ display: 'flex' , height:'100vh' ,justifyContent:'center', alignItems:'center'}}>
              <CircularProgress />
            </Box>
          );
    }

    return (
        <div className="hompage">
            <div className="cat">
            {categories.map((category, indx)=>{
                    return (
                        <Link className='nav-link' key={indx} to={`/categories/${category}`}>{category}</Link>
                    )
                })}
            </div>
            
            <div className="products">
                {products.map((product)=>{
                    const {id, image, title, price, category} = product
                    return (
                        <Card className='card' key={id} sx={{ maxWidth: 345, cursor:'pointer'}} onClick={()=>navigate(`${id}`)} >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="200"
                                sx={{objectFit:'contain'}}
                                image={image}
                            />
                            <CardContent>
                            <Typography variant='caption' color='grey'>{category}</Typography>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {title}
                            </Typography>
                            <Typography  variant="subtitle1" component="div">
                                {`$ ${price}`}
                            </Typography>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default Homepage