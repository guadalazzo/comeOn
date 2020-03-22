import React from 'react';
import Login from '../index';
import renderer from 'react-test-renderer';
import { AuthContext } from '../../../context/auth';
import { MemoryRouter } from 'react-router-dom';
import "babel-polyfill";

describe('Test Login Page', () => {
    test('Login snapshot', () => {
        const authTokens = {};
        const setTokens = jest.fn();
        const component = renderer.create(
            <MemoryRouter>
                <AuthContext.Provider
                    value={{ authTokens, setAuthTokens: setTokens }}
                >
                    <Login/>
                </AuthContext.Provider>
            </MemoryRouter>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
