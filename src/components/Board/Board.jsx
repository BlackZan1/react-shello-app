import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { BoardComponent } from './Components';

export default ({ name, id, color }) => {
    const showBoard = () => (
        <BoardComponent>
            <p style={{background: color}}>{name}</p>
        </BoardComponent>
    )

    return <Fragment>
        <NavLink to={`/board/${id}`}>
            { showBoard() }
        </NavLink>
    </Fragment>
}