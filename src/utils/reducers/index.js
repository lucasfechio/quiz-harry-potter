import { combineReducers } from 'redux';
import correctAnswersReducer from './corrects';

const rootReducer = combineReducers({
    correctAnswersState: correctAnswersReducer,
});

export default rootReducer;