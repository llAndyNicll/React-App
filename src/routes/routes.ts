import { LazyExoticComponent, lazy } from "react";
import { NoLazyload } from "../01-lazyload/pages/NoLazyload";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface RoutesProps {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
};


const LazyLayout = lazy( () => import( /* webpackChunkName: "LazyPage1-Chunk" */ '../01-lazyload/layout/LazyLoyout' ) )


export const routes: RoutesProps[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'LazyLoyout - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazyload,
        name: 'No Lazy'
    },
];