import React from 'react';
import Card from '../index';
import renderer from 'react-test-renderer';


describe('Test Card component', () => {
    test('Card snapshot', () => {
        const component = renderer.create(<Card>Home</Card>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
