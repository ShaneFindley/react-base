import { render } from '@testing-library/react';
import ReactRouterPage from "../react-router"

jest.mock('../logo.png', () => ({
    __esModule: true,
    default: 'img',
}));

jest.mock('prismjs/themes/prism-okaidia.min.css', () => ({
    __esModule: true,
    default: 'css',
}));

describe('react-router-page', () => {
    it('should load', () => {
        expect(() => render(<ReactRouterPage />)).not.toThrow();
    })
})