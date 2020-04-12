import React, { useEffect } from 'react';
import BoardCreator from '../BoardCreator/BoardCreator';
import Board from '../Board/Board';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setBoardItemAction, deleteBoardAction } from '../../redux/reducers/boardsReducer';
import { changeHeaderColorAction } from '../../redux/reducers/headerReducer';

const BoardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 90%;
    margin: 20px auto;
`

const Wrapper = () => {
    let dispatch = useDispatch();
    let stateData = useSelector((state) => ({
        boards: state.boardData.boards
    }))

    useEffect(() => {
        dispatch(changeHeaderColorAction('rgba(0, 0, 0, 0.3)'))
    }, [dispatch])

    const createBoard = ({ name, id, color }) => {
        dispatch(setBoardItemAction({name, id, color, data: []}))
    }

    const deleteBoard = (boardId) => {
        dispatch(deleteBoardAction(boardId));
    }

    return (
        <div>
            <BoardCreator createBoard={createBoard} />

            <BoardList>
                {
                    stateData.boards.length ? stateData.boards.map((item, i) => {
                        return <Board 
                            key={i} 
                            name={item.name} 
                            color={item.color} 
                            id={item.id} 
                            onClickHandler={deleteBoard}
                        />
                    })
                    :
                    <h1 style={{margin: '80px auto', color: '#a9a9a9', fontSize: '42px'}}>No boards</h1>
                }
            </BoardList>
        </div>
    )
}

export default Wrapper;