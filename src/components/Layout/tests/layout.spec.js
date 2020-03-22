import React from 'react';
import Layout from '../index';
import renderer from 'react-test-renderer';


describe('Test Layout component', () => {
    test('Layout snapshot', () => {
        const component = renderer.create(<Layout>Home</Layout>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
