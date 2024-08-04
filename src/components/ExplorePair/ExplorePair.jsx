import React from 'react'
import './ExplorePair.css'
import {pair_list } from '../../assets/assets'

const ExplorePair = ({category,setCategory}) => {
   
  return (
    <div className='explore-pair' id='explore-pair'>
      <h1>Explore our pairs </h1>
      <p className='explore-pair-text'>Explore our stylish collection of shoes, crafted with premium materials for ultimate comfort and durability. From casual sneakers to elegant heels, find the perfect pair to match any occasion and elevate your wardrobe!</p>
      <div className='explore-pair-list'>
        {pair_list.map((item,index)=>{
          return (
            <div onClick={()=>setCategory(prev=>prev===item.pair_name?"All":item.pair_name)} key={index}className='explore-pair-item'>
              <img className={category===item.pair_name?"active":""}src={item.pair_image} alt="" />
              <p>{item.pair_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExplorePair