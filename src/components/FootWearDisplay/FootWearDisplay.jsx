import React, { useContext } from 'react';
import './FootWearDisplay.css';
import FootwearItem from '../FootwearItem/FootwearItem'
import { StoreContext } from '../../Context/StoreContext';

const FootWearDisplay = ({category}) => {
  
  const { footwear_list } = useContext(StoreContext);

  return (
    <div className='footwear-display' id='footwear-display'>
      <h2>Top styles for you</h2>
      <div className='footwear-display-list'>
        {footwear_list.map((item,index)=>{
          {console.log(category,item.category);}
          if(category==="All" || category === item.category){
          return <FootwearItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
        }
        })}
      </div>
    </div>
  )
}

export default FootWearDisplay