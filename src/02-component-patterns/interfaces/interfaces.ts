import { ReactElement } from "react";

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
};

export interface ProductContextProps {
    counter: number,
    increaseBy: ( value: number ) => void,
    product: Product,
    styles: CSSModuleClasses
};
  
export interface Product {
    id: string,
    title: string,
    img?: string
};