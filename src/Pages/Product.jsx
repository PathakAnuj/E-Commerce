<<<<<<< HEAD
import React from 'react'

const Product = () => {
  return (
    <div>Product</div>
=======
import React, {useContext} from 'react'

import { ShopContext } from '../Components/Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productid} = useParams();
  const product = all_product.find((e)=> e.id === Number (productid));
  return (
    <div>
       <Breadcrum product = {product}/>
       <ProductDisplay product = {product}/>
      </div>
>>>>>>> bd38917 (making responsive to homepage)
  )
}

export default Product