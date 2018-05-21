import { rollDice } from './actionCreators';

describe('Dice actions', () => {
    it('should dispatch ROLL_DICE action', () => {
        expect(rollDice()).toEqual({ type: 'ROLL_DICE'});
    })
})