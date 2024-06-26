import React, { useState } from 'react'
import './AddProduct.css'
import upload_icon from '../../assets/upload_icon.png'
const AddProduct = () => {

    const [image,setImage] = useState(false);
    const [productDetails,setProductDetails] = useState({
        name:"",
        image:"",
        category:"",
        new_price:"",
        old_price:"",
        description:"",
        blog_description:"",
    })
    const imageHandler = (e) =>{
        setImage(e.target.files[0]);
    }
    const changeHandler = (e) =>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const Add_Product = async ()=>{
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:4000/upload', {
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp) => resp.json()).then((data)=>{responseData=data})

        if(responseData.success)
        {
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("Product Added"):alert("Failed")
            })
        }
    }
  return (


    
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Title</p>
        <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type here'></input>
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>Price</p>
            <input value={productDetails.old_price} onChange={changeHandler} type='text' name='old_price' placeholder='Type here'></input>
        </div>
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input value={productDetails.new_price} onChange={changeHandler} type='text' name='new_price' placeholder='Type here'></input>
        </div>
      </div>
      <div className="addproduct-description">
        <div className="addproduct-itemfield">
            <p>Description</p>
            <input value={productDetails.description} onChange={changeHandler} type='text' name='description' placeholder='Type here'></input>
        </div>
      </div>
      <div className="addproduct-blog">
        <div className="addproduct-itemfield">
            <p>Blog</p>
            <input value={productDetails.blog_description} onChange={changeHandler} type='text' name='blog_description' placeholder='Type here'></input>
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Input Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
            <option value="pooja">Pooja Booking</option>
            <option value="travel">Travel Booking</option>
            <option value="blogs">Blogs</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
            <img src={image?URL.createObjectURL(image):upload_icon} className='addproduct-thumbnail-img' alt="" />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
      </div>
      <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct
