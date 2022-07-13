import React from 'react'
import Product from './Product'
import './Products.sass'

const Products = ({products}) => {
    // console.log(products[0].rating.rate)

  return (
    <div className='Products'>
        
        {products.map(({id,title,category,image,price,rating}) => (
            <Product key={id} title={title} category={category} image={image} price={price} rating={rating.rate}/>
            
        ))}
    </div>
    
  )
}

export default Products