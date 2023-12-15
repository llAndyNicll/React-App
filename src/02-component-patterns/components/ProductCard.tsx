import { ProductButtons, ProductImage, ProductTitle } from ".";
import { ProductContext } from "../context/productContext";
import { useProduct } from "../hooks/useProduct";
import { Props } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const ProductCard = ( { product, children, className, style }: Props ) => {

  const { counter, increaseBy } = useProduct();

  return (
    <ProductContext.Provider value={{ counter, increaseBy, product, styles }} >
      <div className={ `${ styles.productCard } ${ className } ` } style={ style } >

        { children }

        {/*<ProductImage img={ product.img } />

        <ProductTitle title={ product.title } />

        <ProductButtons counter={ counter } increaseBy={ increaseBy } /> */}

      </div>
    </ProductContext.Provider>
  );
};

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons; 