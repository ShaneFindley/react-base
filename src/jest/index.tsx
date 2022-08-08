import { lazy } from 'react';

const JestPage = {
    path: 'jest',
    LazyRender: lazy(() => import('./jest'))
};

export default JestPage;