import React from 'react'
import './Product.sass'

const Product = ({id,title,category,image,price,rating}) => {
  return (
    <div className='product'>
        <div className="productTop">
            <div className="productTag">
                <div className=""></div>
                <div className="productTagi">
                    <img width={'22'} src="https://img.icons8.com/metro/344/like.png" alt="heart" />
                </div>
            </div>
            <div className="productImg">
                <img width={'50'} src={image} alt="" />
            </div>
        </div>
        <div className="productInfo">
            <div className="productName">
            <h2 className="productName__Title">{title}</h2>
            <p className="productDescription">Description</p>
            </div>
            <div className="productDetail">
                <div className="productPrice">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className="productRating">
                    <div className="productRatingValue">
                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/344/external-rating-feedback-those-icons-lineal-color-those-icons-5.png" alt="" />
                        <span>{rating}</span>
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default Product