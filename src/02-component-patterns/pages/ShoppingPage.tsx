import { ProductButtons, ProductImage, ProductTitle } from "../components";
import { ProductCard } from "../components/ProductCard";


const product = {
  id: '1',
  title: 'Caffee Mug - Card',
  img: './coffee-mug.png'
};

export const ShoppingPage = () => {
    
  return (
    <div>

        <h1>Shopping Store</h1>
        <hr />

        <ProductCard product={ product } >

          <ProductCard.Image />

          <ProductCard.Title title={ '' } />

          <ProductCard.Buttons />
        </ProductCard>



        <ProductCard product={ product } >

          <ProductImage />

          <ProductTitle title={ '' } />

          <ProductButtons />
        </ProductCard>

        

    </div>
  )
}
