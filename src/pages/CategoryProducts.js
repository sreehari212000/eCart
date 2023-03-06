import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const CategoryProducts = () => {
  const {category} = useParams()
  const [loading, setLoading] = useState(true)
  const [items, setItems]  = useState([])
  const navigate = useNavigate()
  const URL = `https://fakestoreapi.com/products/category/${category}`
  useEffect(()=>{
    setLoading(true)
    const getCategoryProducts = async ()=>{
      const response = await fetch(URL)
      const data = await response.json()
      setItems(data)
      setLoading(false)
    }
    getCategoryProducts()
  }, [category])

  if(loading){
    return (
        <Box sx={{ display: 'flex' , height:'100vh' ,justifyContent:'center', alignItems:'center'}}>
          <CircularProgress />
        </Box>
      );
}

  return (
    <div className="products">
            {items.map((item)=>{
                const {id, image, title, price } = item
                return (
                    <Card key={id} sx={{ maxWidth: 345}} onClick={()=>navigate(`/${id}`)}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="200"
                            sx={{objectFit:'contain'}}
                            image={image}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
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
  )
}

export default CategoryProducts