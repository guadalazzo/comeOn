import React from 'react';
import Button from '../index';
import renderer from 'react-test-renderer';


describe('Test Button component', () => {
    test('Button snapshot', () => {
        const component = renderer.create(<Button>Home</Button>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Test click event', () => {
        const mockCallBack = jest.fn();
        const button = renderer.create(<Button onClick={mockCallBack}>Ok!</Button>);
        let empl = button.toJSON();
        empl.props.onClick();
        empl = button.toJSON();
        expect(empl).toMatchSnapshot();
        expect(mockCallBack).toHaveBeenCalled();
    });
});
