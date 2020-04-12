import { useCallback, useState } from "react";

export const useBoard = (boards, id) => {
    let [data, setData] = useState([]); // [ {_id: 1, name: 'Udemy', tasks: [ {id: 1, title: 'Buy a course'} ]} ]
    let [board, setBoard] = useState({});

    const getBoardData = useCallback(() => {        
        if(!!boards.length) {
            let board = boards.filter(b => b.id === +id);

            if(board.length) {
                let boardItems = board[0].data || [];

                if(!boardItems.length) {
                    board[0].data = [];
                    boardItems = [];
                }

                setBoard(board[0]);
                setData(boardItems);
            }
            else {
                setBoard({});
                setData([]);
            }
        }

        return;
    }, [boards, id])

    const setBoardItem = useCallback((item) => {
        setData(prev => ([
            ...prev,
            item
        ]))
    }, [])

    return {
        board,
        data,
        getBoardData,
        setBoardItem
    }
}