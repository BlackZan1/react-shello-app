import React, { useState } from 'react';
import { TaskComponent } from './Components';

export default ({ id, title, onClickHandler, toggleIsDoneHandler, status }) => {
    let [isDone, setIsDone] = useState(status);

    const onDragStartHandler = (ev) => {
        ev.dataTransfer.setData("task", JSON.stringify({ id, title }));
    }
    
    const toggleHandler = () => {
        setIsDone(!isDone);
        toggleIsDoneHandler(id, !isDone);
    }

    return (
        <TaskComponent draggable={true} onDragStart={onDragStartHandler}>
            <section style={{textDecoration: isDone ? 'line-through' : 'none', color: isDone ? '#a9a9a9' : '#000'}}>
                {title}
            </section>

            <div style={{color: 'forestgreen'}} onClick={toggleHandler}>
                ✓
            </div>

            <div onClick={() => onClickHandler(id)}>
                X
            </div>
        </TaskComponent>
    )
}