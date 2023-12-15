import { ReactElement } from 'react';


export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: ( value: number ) => void;
    product: Product;
}

export interface ProductTitleProps {
    title?: string,
    className?: string
};

export interface ProductImageProps {
    img?: string,
    className?: string 
};

export interface ProductButtonsProps {
    className?: string
}

// Interface Para la Parte de ProductCard. Y Realizarlo de Otra Forma. 

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ):JSX.Element,
    Title: ( ProductCardProps: ProductTitleProps ) => JSX.Element,
    Image: ( ProductCardProps: ProductImageProps ) => JSX.Element,
    Buttons: ( ProductCardProps: ProductButtonsProps ) => JSX.Element
}


