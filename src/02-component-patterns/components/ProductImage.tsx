import { ProductImageProps } from "../interfaces/interfaces";
import { ProductContext } from "../context/productContext";
import { useContext } from "react";
import noImage from "../assets/no-image.jpg";

export const ProductImage = ( { img, className, style }: ProductImageProps ) => {

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
      <img style={ style } className={ `${ styles.productImg } ${ className } ` } src={ imgToShow } alt='Product Image' />
    );
  
};