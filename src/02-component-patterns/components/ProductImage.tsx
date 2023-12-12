import { ProductContext } from "../context/productContext";
import { useContext } from "react";
import noImage from "../assets/no-image.jpg";

export const ProductImage = ({ img = '' }) => {

    const { product, styles } = useContext( ProductContext );
  
    let imgToShow : string;
  
    if( img ) {
  
      imgToShow = img
  
    } else if( product.img ) {
  
      imgToShow = product.img
  
    } else {
  
      imgToShow = noImage
  
    }
  
    return (
      <img className={ styles.productImg } src={ imgToShow } alt='Product Image' />
    );
  
};