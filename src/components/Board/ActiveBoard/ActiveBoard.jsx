import React, { useEffect, useState, Fragment } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
    setActiveBoardItems, 
    setActiveBoardItem, 
    deleteActiveBoardItem, 
    deleteBoardAction, 
    setTaskToBoardItem, 
    deleteTaskFromBoardItem,
    toggleItemTaskStatus,
    updateBoardColor
} from '../../../redux/reducers/boardsReducer';
import { compose } from 'redux';
import { ActiveBoardComponent, ActiveBoardList, ActiveBoardForm } from './Components';
import { changeHeaderColorAction } from '../../../redux/reducers/headerReducer';
import randomId from '../../../utils/randomId';
import BoardItem from '../BoardItem/BoardItem';
import { BoardItemClose } from '../BoardItem/Components';
import { useBoard } from './hook/useBoard.hook';
import { colors } from '../../BoardCreator/BoardCreator';
import { CreatorColorCircle } from '../../BoardCreator/Components';

const ActiveBoard = ({
    match: {params: {id}}, 
    boards, 
    setActiveBoardItems, 
    changeHeaderColorAction, 
    setActiveBoardItem,
    deleteActiveBoardItem,
    deleteBoardAction,
    setTaskToBoardItem,
    deleteTaskFromBoardItem,
    toggleItemTaskStatus,
    updateBoardColor
}) => {
    let { board, data, getBoardData, setBoardItem } = useBoard(boards, id);
    let [addMode, setAddMode] = useState(false);
    let [itemName, setItemName] = useState('');
    let [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        getBoardData();
    }, [getBoardData])

    useEffect(() => {
        setActiveBoardItems(data);
    }, [data, setActiveBoardItems])

    useEffect(() => {
        changeHeaderColorAction(board.color);
    }, [board, changeHeaderColorAction])

    const onInputHandler = (ev) => {
        let { value } = ev.currentTarget;

        setItemName(value);
    }

    const addBoardItem = () => {
        let randId = randomId();

        let boardItem = {
            id: randId,
            name: itemName,
            tasks: []
        }

        setBoardItem(boardItem);
        setActiveBoardItem({ item: boardItem, boardId: id });
        setAddMode(false);
        setItemName('');
    }

    const deleteBoardTask = (itemId) => {
        deleteActiveBoardItem({ itemId, boardId: id });
    }

    const deleteBoard = () => {
        deleteBoardAction(id);

        setIsDeleted(true);
    }

    const setTask = (task, itemId) => {
        setTaskToBoardItem({ task, itemId, boardId: id });
    }

    const deleteTask = (taskId, itemId) => {
        deleteTaskFromBoardItem({ taskId, itemId, boardId: id });
    }

    const toggleTaskStatus = (taskId, itemId, isDone) => {
        toggleItemTaskStatus({ taskId, itemId, boardId: id, isDone })
    }

    const updateColor = (color) => {
        updateBoardColor({ boardId: id, color });
        changeHeaderColorAction(color);
    }

    return (
        <ActiveBoardComponent>
            <Fragment>
                <h1 style={{background: board.color ? board.color : '#fff', color: board.color ? '#fff' : '#000'}}>{board.name}</h1>

                <BoardItemClose style={{left: '360px', top: '105px', background: board.color, width: '50px', height: '50px', borderRadius: '20%'}} onClick={deleteBoard} />

                <section style={{display: 'flex', left: '460px', top: '103px', position: 'absolute'}}>
                    {
                        colors.map((color, i) => {
                            return <CreatorColorCircle 
                                onClick={() => updateColor(color)} 
                                key={i} 
                                style={{background: color, width: '45px', height: '45px'}} 
                            />
                        })
                    }
                </section>
            </Fragment>

            <ActiveBoardList>
                {
                    data.length ? 
                    data.map((item, i) => {
                        return <BoardItem 
                            board={board}
                            key={i}
                            name={item.name} 
                            tasks={item.tasks} 
                            id={item.id} 
                            color={board.color ? board.color : '#fff'}
                            onClickHandler={deleteBoardTask}
                            setTask={setTask}
                            deleteTask={deleteTask}
                            toggleTaskStatus={toggleTaskStatus}
                        />
                    })
                    :
                    null
                }
                
                {
                    addMode ?
                    <ActiveBoardForm>
                        <input type="text" placeholder="Add list name" onInput={onInputHandler} />

                        <button 
                            style={{background: board.color ? board.color : '#fff', color: board.color ? '#fff' : '#000'}} 
                            onClick={addBoardItem}
                            disabled={!itemName.length}
                        >
                            Add
                        </button>
                    </ActiveBoardForm>
                    :
                    <button onClick={() => setAddMode(true)}>
                        Add a list
                    </button>
                }
            </ActiveBoardList>

            {
                isDeleted && <Redirect to={'/'} />
            }
        </ActiveBoardComponent>
    )
}

let mapStateToProps = (state) => ({
    boards: state.boardData.boards
});

export default compose(
    withRouter,
    connect(mapStateToProps, {
        setActiveBoardItems,
        changeHeaderColorAction,
        setActiveBoardItem,
        deleteActiveBoardItem,
        deleteBoardAction,
        setTaskToBoardItem,
        deleteTaskFromBoardItem,
        toggleItemTaskStatus,
        updateBoardColor
    })
)(ActiveBoard);