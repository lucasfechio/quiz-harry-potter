const INITIAL_STATE = {
    points: 0
};

const incrementPoints = (state) => ({
    ...state,
    points: state.points + 1
});

const resetPoints = (state) => ({
    ...state,
    points: 0
});

function correctAnswersReducer(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'ADD': {
            return incrementPoints(state)
        }
        case 'RESET': {
            return resetPoints(state)
        }
        default: return state;
    }
}

export default correctAnswersReducer;