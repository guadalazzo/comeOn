import React from 'react';
import Input from '../index';
import renderer from 'react-test-renderer';


describe('Test Input component', () => {
    test('Input snapshot', () => {
        const component = renderer.create(<Input/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
