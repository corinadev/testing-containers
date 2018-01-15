import { rollDice as rollDiceAction } from '../actions';

export const rollDice = (dispatch) => {
    dispatch(rollDiceAction());
};