import React, { useState } from 'react';
import randomId from '../../../utils/randomId';
import Task from '../Task/Task';
import { BoardItemComponent, BoardItemClose } from './Components';

export default ({ 
    name, 
    id, 
    tasks, 
    color, 
    onClickHandler, 
    setTask, 
    deleteTask,
    board,
    toggleTaskStatus
}) => {
    let [ newTask, setNewTask ] = useState('');

    const onChangeHandler = (ev) => {
        let { value } = ev.currentTarget;

        setNewTask(value);
    }

    const onKeyDownHandler = (ev) => {
        if(ev.keyCode === 13 && !!newTask.length) {
            let newTaskItem = {
                id: randomId(),
                title: newTask,
                isDone: false
            }

            setTask(newTaskItem, id);
            setNewTask('');
        }
    }

    const onDropHandler = (ev) => {
        ev.preventDefault();

        let newTaskItem = JSON.parse(ev.dataTransfer.getData('task'));

        board.data.forEach(item => {
            item.tasks = item.tasks.filter(task => +task.id !== +newTaskItem.id);
        })

        ev.currentTarget.style.paddingBottom = '20px';


        if(tasks.some(i => +i.id === +newTaskItem.id)) {
            deleteTask(newTaskItem.id, id);
        }

        setTask(newTaskItem, id);
    }
    
    const deteteHandler = (taskId) => {
        deleteTask(taskId, id);
    }

    const toggleIsDoneHandler = (taskId, isDone) => {
        toggleTaskStatus(taskId, id, isDone)
    }

    return (
        <BoardItemComponent
            onDragEnter={(ev) => {
                ev.preventDefault();
            }} 
            onDragLeave={(ev) => {
                ev.preventDefault();
                ev.currentTarget.style.paddingBottom = '20px';
            }} 
            onDragOver={(ev) => { 
                ev.preventDefault()
                ev.currentTarget.style.paddingBottom = '50px';
            }}
            onDrop={onDropHandler}
        >
            <p>{name}</p>

            <input
                onChange={onChangeHandler} 
                type="text" 
                placeholder="Add a task" 
                onKeyDown={onKeyDownHandler} 
                value={newTask}
            />

            <div style={{width: '100%'}}>
                {
                    tasks.length ?
                    tasks.map(task => {
                        return <Task 
                            key={task.id} 
                            title={task.title} 
                            id={task.id} 
                            onClickHandler={deteteHandler} 
                            toggleIsDoneHandler={toggleIsDoneHandler}
                            status={task.isDone}
                        />
                    })
                    :
                    null
                }
            </div>

            <BoardItemClose style={{background: color}} onClick={() => onClickHandler(id)} />
        </BoardItemComponent>
    )
}