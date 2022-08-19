import { render } from '@testing-library/react';
import PrismJsPage from "../prismjs"

jest.mock('../logo.svg', () => ({
    __esModule: true,
    default: 'img',
}));

jest.mock('prismjs/themes/prism-okaidia.min.css', () => ({
    __esModule: true,
    default: 'css',
}));

describe('prismjs-page', () => {
    it('should load', () => {
        expect(() => render(<PrismJsPage />)).not.toThrow();
    })
})