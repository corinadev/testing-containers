import { rollDice } from './actionCreators';

describe('Dice actions', () => {
    it('should dispatch ROLL_DICE action', () => {
        const dispatch = jest.fn();
        rollDice(dispatch);
        expect(dispatch.mock.calls[0][0]).toEqual({ type: 'ROLL_DICE'});
    })
})