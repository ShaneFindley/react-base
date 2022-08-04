import { render } from '@testing-library/react';
import TestingComponent from "../testing-component";


it('changes the class when hovered', () => {
    const result = render(
        <TestingComponent id='test' page="https://www.facebook.com">Facebook</TestingComponent>,
    );

    expect(result.container.querySelector('#test')?.innerHTML).toEqual('Facebook');
});