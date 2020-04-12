import { saveData } from "../../utils/configStorage";

const ADD_DATA = 'boards/ADD_DATA', 
    SET_BOARD = 'SET_BOARD', 
    SET_ACTIVE_BOARD_ITEMS = 'SET_ACTIVE_BOARD_ITEMS', 
    SET_ACTIVE_BOARD_ITEM = 'SET_ACTIVE_BOARD_ITEM', 
    SET_TASK_TO_ITEM = 'SET_TASK_TO_ITEM',
    DELETE_ACTIVE_BOARD_ITEM = 'DELETE_ACTIVE_BOARD_ITEM',
    DELETE_BOARD = 'DELETE_BOARD',
    DELETE_TASK_FROM_ITEM = 'DELETE_TASK_FROM_ITEM',
    TOGGLE_ITEM_TASK_STATUS = 'TOGGLE_ITEM_TASK_STATUS',
    UPDATE_BOARD_COLOR = 'UPDATE_BOARD_COLOR';

let initialState = {
    boards: [],
    activeBoardItems: [],
    activeBoardId: ''
}

const saveBoardsAndReturn = (state, boards) => {
    saveData({ boards });

    return {
        ...state,
        boards: [
            ...boards
        ]
    }
}

const boardsReducer = (state = initialState, action) => {
    let newBoardState = [...state.boards];

    switch(action.type) {
        case ADD_DATA:
            return {
                ...state,
                boards: [
                    ...action.data
                ]
            }
        case SET_BOARD:
            newBoardState = [
                ...state.boards,
                action.board
            ]

            return saveBoardsAndReturn(state, newBoardState);
        case UPDATE_BOARD_COLOR:
            newBoardState.forEach(board => {
                if(board.id === +action.data.boardId) {
                    board.color = action.data.color
                }
            })

            return saveBoardsAndReturn(state, newBoardState);
        case DELETE_BOARD:
            newBoardState = newBoardState.filter(i => i.id !== +action.boardId);

            return saveBoardsAndReturn(state, newBoardState);
        case SET_ACTIVE_BOARD_ITEMS:
            return {
                ...state,
                activeBoardItems: [
                    ...action.boardItems
                ]
            }
        case SET_ACTIVE_BOARD_ITEM:
            newBoardState.forEach(i => {
                if(i.id === +action.data.boardId) {
                    i.data.push(action.data.item);
                }
            })

            return saveBoardsAndReturn(state, newBoardState);
        case DELETE_ACTIVE_BOARD_ITEM:
            newBoardState.forEach(i => {
                if(i.id === +action.data.boardId) {
                    i.data = i.data.filter(j => +j.id !== +action.data.itemId);
                }
            })

            return saveBoardsAndReturn(state, newBoardState);
        case SET_TASK_TO_ITEM:
            newBoardState.forEach(i => {
                if(i.id === +action.data.boardId) {
                    i.data.forEach(j => {
                        if(j.id === +action.data.itemId) {
                            j.tasks.unshift(action.data.task);
                        }
                    })
                }
            })

            return saveBoardsAndReturn(state, newBoardState);
        case TOGGLE_ITEM_TASK_STATUS:
            newBoardState.forEach(i => {
                if(i.id === +action.data.boardId) {
                    i.data.forEach(j => {
                        if(j.id === +action.data.itemId) {
                            j.tasks.forEach(z => {
                                if(z.id === action.data.taskId) {
                                    z.isDone = action.data.isDone;
                                }
                            })
                        }
                    })
                }
            })

            return saveBoardsAndReturn(state, newBoardState);
        case DELETE_TASK_FROM_ITEM:
            newBoardState.forEach(i => {
                if(i.id === +action.data.boardId) {
                    i.data.forEach(j => {
                        if(j.id === +action.data.itemId) {
                            j.tasks = j.tasks.filter(z => +z.id !== +action.data.taskId);
                        }
                    })
                }
            })

            return saveBoardsAndReturn(state, newBoardState);
        default:
            return state;
    }
}

// Board Actions
export const setBoardDataAction = (data) => ({ type: ADD_DATA, data });
export const setBoardItemAction = (board) => ({ type: SET_BOARD, board });
export const setActiveBoardItems = (boardItems) => ({ type: SET_ACTIVE_BOARD_ITEMS, boardItems });
export const updateBoardColor = ({ boardId, color }) => ({ type: UPDATE_BOARD_COLOR, data: { boardId, color } });
// Item Actions
export const setActiveBoardItem = ({ item, boardId }) => ({ type: SET_ACTIVE_BOARD_ITEM, data: { item, boardId } });
// Task Actions
export const setTaskToBoardItem = ({ task, itemId, boardId }) => ({ type: SET_TASK_TO_ITEM, data: { task, itemId, boardId } });
export const toggleItemTaskStatus = ({ taskId, itemId, boardId, isDone }) => ({ type: TOGGLE_ITEM_TASK_STATUS, data: { taskId, itemId, boardId, isDone } });
// DELETE Actions
export const deleteActiveBoardItem = ({ itemId, boardId }) => ({ type: DELETE_ACTIVE_BOARD_ITEM, data: { itemId, boardId } });
export const deleteBoardAction = (boardId) => ({ type: DELETE_BOARD, boardId });
export const deleteTaskFromBoardItem = ({ taskId, itemId, boardId }) => ({ type: DELETE_TASK_FROM_ITEM, data: { taskId, itemId, boardId } });

export default boardsReducer;