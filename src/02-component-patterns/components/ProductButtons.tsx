import { ProductButtonsProps } from "../interfaces/interfaces";
import { ProductContext } from "../context/productContext";
import { useContext } from "react";

export const ProductButtons = ( { className, style }: ProductButtonsProps ) => {

    const { counter, increaseBy, styles } = useContext( ProductContext );
  
    return (
      <div className={ `${ styles.buttonsContainer } ${ className } ` } style={ style } >
  
        <button onClick={ () => increaseBy( -1 ) } className={ styles.buttonMinus }> - </button>
  
        <div className={ styles.countLabel }> { counter } </div>
  
        <button onClick={ () => increaseBy( +1 ) } className={ styles.buttonAdd }> + </button>
  
      </div>
    );
  
};
  