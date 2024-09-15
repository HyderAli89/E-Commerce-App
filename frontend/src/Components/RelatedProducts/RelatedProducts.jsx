import React from 'react'
import "./RelatedProducts.css" 
import data_product from '../Assets/Frontend_Assets/data'
import Item from '../Item/Item'
export const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Product</h1>
        <div><hr /></div>
        <div className="relatedproduct-items">
            {data_product.map((item,index)=>{
                return < Item key={index} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
export default RelatedProducts