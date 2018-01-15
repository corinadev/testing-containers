import { getLastRolledNumber } from './selectors';

describe('Dice selectors', () => {

    it('should select last rolled number from state', () => {
        const state = { lastRolledNumber: 7 };
        expect(getLastRolledNumber(state)).toBe(7);
    });

});