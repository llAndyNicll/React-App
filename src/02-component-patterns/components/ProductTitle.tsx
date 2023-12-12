import { ProductContext } from "../context/productContext";
import { useContext } from "react";

export const ProductTitle = ( { title }: { title: string } ) => {

    const { product, styles } = useContext( ProductContext );
  
    let titleToShow : string;
  
    if( title ) {
  
      titleToShow = title
  
    } else if( product.title ) {
  
      titleToShow = product.title
  
    } else {
  
      titleToShow = 'No Name'
  
    }
  
    return (
      <span className={ styles.productDescription }>{ titleToShow }</span>
    );
  
};