import React from 'react';
import { shallow } from 'enzyme';
import '../test-config'; // Setup Enzyme & Adapter

import DiceContainer from './Dice';

// Create the mock store
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

describe('Dice', () => {
    let wrapper, store;

    beforeEach(() => {
        const initialState = {
            lastRolledNumber: 1
        };
        store = mockStore(initialState);
        // Shallow render the container passing in the mock store
        wrapper = shallow(
            <DiceContainer store={store} />
        );
    });

    it('should show previously rolled value', () => {
        // test that the state values were correctly passed as props
        expect(wrapper.props().lastRolledNumber).toBe(1);
    });

    it('should roll the dice again when button is clicked', () => {
        // test that the component events dispatch the expected actions 
        wrapper.simulate('rollDice');

        const actions = store.getActions();
        expect(actions).toEqual([ { type: 'ROLL_DICE' } ]);
    });
});