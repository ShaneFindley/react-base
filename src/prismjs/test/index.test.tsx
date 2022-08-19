import PrismJs from "..";

describe('prism-page', () => {
    it('should load', () => {
        expect(PrismJs.path).toEqual('prismjs');
    })
})