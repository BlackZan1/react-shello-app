const CHANGE_COLOR = 'CHANGE_COLOR';

let initialState = {
    color: 'rgba(0, 0, 0, 0.3)'
}

const headerReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_COLOR:
            return {
                color: action.color
            }
        default:
            return state;
    }
}

export const changeHeaderColorAction = (color) => ({ type: CHANGE_COLOR, color });

export default headerReducer;