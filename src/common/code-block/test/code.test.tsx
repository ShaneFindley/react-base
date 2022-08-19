import { render } from '@testing-library/react';
import Code from '../code';

jest.mock('prismjs/themes/prism-okaidia.min.css', () => ({
    __esModule: true,
    default: 'css',
}));

describe('code-block', () => {
    it('should load', () => {
        expect(() => render(<Code code='<Test></Test>' language='tsx' />)).not.toThrow();
    })

    it('should render tsx data', () => {
        const result = render(<Code code='<Test></Test>' language='tsx' />);
        expect(result.container.innerHTML).toEqual('<div class="Code"><pre class="language-tsx" tabindex="0"><code class="language-tsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Test</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Test</span></span><span class="token punctuation">&gt;</span></span></code></pre></div>');
    })

    it('should render html data', () => {
        const result = render(<Code code='<Test></Test>' language='html' />);
        expect(result.container.innerHTML).toEqual('<div class="Code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Test</span><span class="token punctuation">&gt;</span></span></code></pre></div>');
    })
})