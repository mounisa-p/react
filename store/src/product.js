import React, { Component } from 'react';

/**
 * Page contains
 *  - ProductCard
 *  - Filter (Category, Price)
 * 
 * Purpose
 *  - get all the pro
 */

class product extends Component {
  state = {
    data: [{
      id: 1,
      image: "https://m.media-amazon.com/images/I/91ljGPGHzEL._AC_UL640_FMwebp_QL65_.jpg",
      name: "Polo", category: "Tshirts", variantType: "size", variants: [
      { size: "S", price: 234 },
      { size: "M", price: 244 },
      { size: "L", price: 254 },
      { size: "XL", price: 634 }
    ] },
    {
      id: 2, image: "https://m.media-amazon.com/images/I/71A-ARRXrZL._AC_UL640_FMwebp_QL65_.jpg",
      name: "TeamSprit", category: "Tshirts", variantType: "size", variants: [
      { size: "S", price: 234 },
      { size: "M", price: 244 },
      { size: "L", price: 254 },
      { size: "XL", price: 634 }
    ] },
    {
      id: 3, image: "https://m.media-amazon.com/images/I/61p3lA4N3uL._AC_SX360_SY240_QL70_.jpg",
      name: "Lenovo", category: "Laptops", 
      variantType: "storage",
      variants: [{ storage: "1TB", price: 345 }, { storage: "512GB", price: 256 }]
    },
  
    {
      id: 4, image: "https://m.media-amazon.com/images/I/51CEknIIHcL._AC_UY436_FMwebp_QL65_.jpg",
      name: "Dell", category: "Laptops", 
      variantType: "storage",
      variants: [{ storage: "512GB", price: 345 }, { storage: "1TB", price: 456 }]
    },
  
    {
      id: 5, image: "https://m.media-amazon.com/images/S/gladiator-image-upload-prod/b/A21TJRUUN4KGV/ab989de05191673401cd2dec88afe77e._CR0,0,400,400_AC_SL360_QL70_.jpg",
      name: "MacBook", category: "Laptops",
      variantType: "storage",
      variants: [{ storage: "256GB", price: 345 }, { storage: "512GB", price: 436 }]
    },
  
    {
      id: 6, image: "https://m.media-amazon.com/images/I/71Lx9l3NivL._AC_UL640_FMwebp_QL65_.jpg",
      name: "OnePlus", category: "Mobiles",
      variantType: "storage",
      variants: [{ storage: "32GB", price: 345 }, { storage: "64GB", price: 436 }]
    },
  
    {
      id: 7, image: "https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UL640_FMwebp_QL65_.jpg",
      name: "Samsung", category: "Mobiles",
      variantType: "storage",
      variants: [{ storage: "32GB", price: 345 }, { storage: "64GB", price: 436 }]
    },
  
    {
      id: 8, image: "https://m.media-amazon.com/images/I/71yNlZ4dVZL._AC_UL640_FMwebp_QL65_.jpg",
      name: "Oppo", category: "Mobiles", 
      variantType: "storage",
      variants: [{ storage: "32GB", price: 345 }, { storage: "64GB", price: 436 }]
    },
  
    {
      id: 9, image: "https://m.media-amazon.com/images/I/71E5zB1qbIL._AC_UL640_FMwebp_QL65_.jpg",
      name: "iPhone X", category: "Mobiles", 
      variantType: "storage",
      variants: [{ storage: "32GB", price: 345 }, { storage: "64GB", price: 436 }]
    },]
  }

  render() {
    
    return (

            this.state.data.map(product => {
              return (
                <div key={product.id} class="product-card-image">
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td> {product.image}</td>
                </div>
     )})
    );
  }
}

export default product