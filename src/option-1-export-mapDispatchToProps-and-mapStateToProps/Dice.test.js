import React from 'react';
import { mapStateToProps, mapDispatchToProps } from './Dice';

describe('Dice', () => {
    it('should show previously rolled value', () => {
        const initialState = {
            lastRolledNumber: 1
        };
        expect(mapStateToProps(initialState).lastRolledNumber).toEqual(1);
    });

    it('should roll the dice again when button is clicked', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).onRollDice();
        expect(dispatch.mock.calls[0][0]).toEqual({ type: 'ROLL_DICE'});
    });
});