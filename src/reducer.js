const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const initialState = { lastRolledNumber: 1 };

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ROLL_DICE':
        return {
            ...state,
            lastRolledNumber: getRandomInt(1,6)
        }
      default:
        return state
    }
  }
  
  export default reducer
  