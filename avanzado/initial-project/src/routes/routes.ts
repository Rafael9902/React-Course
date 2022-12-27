import { lazy } from "react";
import { Route } from "./route.interface";

const lazy1 = lazy(() => import('../01-lazy-load/pages/LazyPage1'));
const lazy2 = lazy(() => import('../01-lazy-load/pages/LazyPage2'));
const lazy3 = lazy(() => import('../01-lazy-load/pages/LazyPage3'));

export const ROUTES: Route[] = [
    { to: '/lazy1', path: 'lazy1', Component: lazy1, name: 'Lazy1' },
    { to: '/lazy2', path: 'lazy2', Component: lazy2, name: 'Lazy2' },
    { to: '/lazy3', path: 'lazy3', Component: lazy3, name: 'Lazy3' }
]
