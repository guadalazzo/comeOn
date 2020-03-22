import React from 'react';
import CardContent from '../index';
import renderer from 'react-test-renderer';


describe('Test CardContent component', () => {
    test('CardContent snapshot', () => {
        const component = renderer.create(<CardContent>Home</CardContent>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
