import React from 'react';
// We made the mapStateToProps and mapDispatchToProps methods public, 
// so they can now be imported in the test
import { mapStateToProps, mapDispatchToProps } from './Dice';

describe('Dice', () => {
    it('should show previously rolled value', () => {
        const initialState = {
            lastRolledNumber: 1
        };

        // Just call the method directly passing in sample data
        // to make sure it does what it's supposed to
        expect(mapStateToProps(initialState).lastRolledNumber).toEqual(1);
    });

    it('should roll the dice again when button is clicked', () => {
        const dispatch = jest.fn();

        // For the `mapDispatchToProps`, call it directly but pass in
        // a mock function and check the arguments passed in are as expected
        mapDispatchToProps(dispatch).onRollDice();
        expect(dispatch.mock.calls[0][0]).toEqual({ type: 'ROLL_DICE'});
    });
});