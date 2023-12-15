import { CSSProperties, ReactElement } from "react";

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
};

export interface ProductContextProps {
    counter: number;
    increaseBy: ( value: number ) => void;
    product: Product;
    styles: CSSModuleClasses;
};
  
export interface Product {
    id: string;
    title: string;
    img?: string;
};

export interface ProductTitleProps {
    title?: string;
    className?: string;
    style?: CSSProperties;
};

export interface ProductImageProps {
    img?: string;
    className?: string;
    style?: CSSProperties;
};

export interface ProductButtonsProps {
    className?: string;
    style?: CSSProperties;
}