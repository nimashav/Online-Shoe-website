import React, {useContext} from 'react'
import './FootwearItem.css'
import { assets } from '../../assets/assets'


const FootwearItem = ({id,name,price,description,image}) => {

 

  return (
    <div className="footwear-item">
      <div className="footwear-item-img-container ">
          <img className="footwear-item-image" src={image} alt="" />
      </div>
        <div className="footwear-item-info">
        <div className="footwear-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="footwear-item-desc">{description}</p>
        <p className="footwear-item-price">${price}</p>
    </div>
  </div>
  )
}

export default FootwearItem