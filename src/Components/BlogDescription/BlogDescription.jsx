import React from 'react'
import './BlogDescription.css'
const BlogDescription = (props) => {
  const {product} = props;
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="description-nav-box">Blog</div>
        </div>
        <div className="descriptionbox-description">
          {product.blog_description}
        </div>
      
    </div>
  )
}

export default BlogDescription
