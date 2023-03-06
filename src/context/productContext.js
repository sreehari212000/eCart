import React, { useEffect, useState } from 'react'


export const ProductContext = React.createContext()

export const ProductProvider = ({children}) =>{
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const fetchProducts = async ()=>{
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
            setLoading(false)        
        }
        fetchProducts()
    }, [])

    useEffect(()=>{
        const fetchCategories = async ()=>{
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const data = await response.json()
            setCategories(data)
        }
        fetchCategories()
    }, [])


    return (
        <ProductContext.Provider value={{loading, products, categories}}>
            {children}
        </ProductContext.Provider>
    )
}