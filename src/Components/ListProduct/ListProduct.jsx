import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import delete_icon from '../../assets/remove_icon.png'
const ListProduct = () => {

    const [allproducts,setAllProducts] = useState([]);

    const fetchInfo = async ()=>{
        await fetch('http://localhost:4000/allproducts')
        .then((res)=>res.json())
        .then((data)=>{setAllProducts(data)});
    }

    useEffect(()=>{
        fetchInfo();
    },[])

    const remove_product = async (id)=>{
        await fetch('http://localhost:4000/removeproduct',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({id:id})
        })
        await fetchInfo();
    }


  return (
    <div className='list'>
        <h1>Update Input List</h1>
        <div className="list-format-main">
            <p>Inputs</p>
            <p>Title</p>
            <p>Price</p>
            <p>Offer Price</p>
            <p>Category</p>
            <p>Remove</p>
        </div>
        <div className="list-all">
            <hr />
            {allproducts.map((product,index)=>{
                return <>
                <div key={index} className="list-format-main list-format">
                    <img src={product.image} alt="" className='list-image' />
                    <p> {product.name} </p>
                    <p> ₹{product.old_price} </p>
                    <p> ₹{product.new_price} </p>
                    <p> {product.category} </p>
                    <img onClick={()=>{remove_product(product.id)}} src={delete_icon} alt="" className='list-remove-icon' />


                </div>
                <hr />
                </>
            })}
        </div>
      
    </div>
  )
}

export default ListProduct
