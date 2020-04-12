import { createStore, combineReducers } from 'redux';
import boardsReducer from './reducers/boardsReducer';
import headerReducer from './reducers/headerReducer';

const rootReducer = combineReducers({
    boardData: boardsReducer,
    header: headerReducer
});

const store = createStore(rootReducer);

window.store = store;

export default store;