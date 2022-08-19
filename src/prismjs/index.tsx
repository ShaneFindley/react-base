import { lazy } from 'react';

const PrismJs = {
    path: 'prismjs',
    LazyRender: lazy(() => import('./prismjs'))
};

export default PrismJs;