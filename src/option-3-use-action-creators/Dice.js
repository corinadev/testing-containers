import React from 'react';
import PropTypes from 'prop-types';
import { rollDice } from './actionsCreators';
import { connect } from 'react-redux';
import { getLastRolledNumber } from './selectors';

export const Dice = ({ lastRolledNumber, onRollDice }) => (
    <div>        
        <p>The last rolled number was {lastRolledNumber}.</p>
        <button onClick={onRollDice}>Roll dice</button>
    </div>
);

Dice.propTypes = {
    lastRolledNumber: PropTypes.number.isRequired,
    onRollDice: PropTypes.func.isRequired
}

export default connect({
    lastRolledNumber: getLastRolledNumber(state)
}, { rollDice })(Dice);