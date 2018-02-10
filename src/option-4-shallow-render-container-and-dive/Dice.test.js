import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import '../test-config';

import DiceContainer from './Dice';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

describe('Dice - option 4', () => {
    let wrapper, store;

    beforeEach(() => {
        const initialState = {
            lastRolledNumber: 1
        };
        store = mockStore(initialState);
        wrapper = shallow(
            <Provider store={store}>
                <DiceContainer  />
            </Provider>
        ).dive({ context: { store } });
    });

    it('should show previously rolled value', () => {
        expect(wrapper.props().lastRolledNumber).toBe(1);
    });

    it('should roll the dice again when button is clicked', () => {
        wrapper.simulate('rollDice');

        const actions = store.getActions();
        expect(actions).toEqual([ { type: 'ROLL_DICE' } ]);
    });
});