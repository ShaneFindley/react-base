import { lazy } from 'react';

const ReactRouter = {
    path: 'react-router',
    LazyRender: lazy(() => import('./react-router'))
};

export default ReactRouter;