import React from 'react'
import '../components/Product.css'

const Product = (props) => {
  return (
    <>
        <div className='container'>
            <h1 > {props.pname} </h1>
            <img src={props.image} />
            <p> {props.desc}</p>
        </div>
    </>
  )
}

export default Product