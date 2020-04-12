import React from 'react';
import { useState } from 'react';
import { 
    CreatorBtns, 
    CreatorColorCircle, 
    CreatorComponent, 
    CreatorForm,
    CreatorTitle
} from './Components';
import randomId from '../../utils/randomId';

export let colors = [
    'crimson',
    'chocolate',
    '#ed9eaa',
    'coral',
    'seagreen',
    'dodgerblue',
    'DarkKhaki',
    '#323232'
]

const BoardCreator = ({ createBoard }) => {
    let [boardData, setBoardData] = useState({
        name: '',
        color: ''
    })

    const onChangeHandler = (ev) => {
        let { value, name } = ev.currentTarget;

        setBoardData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const onColorClick = (ev) => {
        let { value } = ev.currentTarget.attributes.value;
        let colors = ev.currentTarget.parentNode.querySelectorAll('div');

        colors.forEach(color => {
            color.style.opacity = '';
        })

        setBoardData(prev => ({
            ...prev,
            color: value
        }))

        ev.currentTarget.style.opacity = '1';
    }

    const onAddBoard = () => {
        alert(JSON.stringify(boardData));

        let { name, color } = boardData;
        let id = randomId();

        setBoardData({
            name: '',
            color: ''
        })

        createBoard({ name, id, color });
    }

    const onClearHandler = () => {
        setBoardData({
            name: '',
            color: ''
        })
    }

    let disabled = !!boardData.name.length && !!boardData.color.length;

    return (
        <CreatorComponent>
            <CreatorTitle style={{background: boardData.color.length ? boardData.color : '#fff', color: boardData.color.length ? '#fff' : '#000'}}>
                Create board in Shello
            </CreatorTitle>

            <CreatorForm>
                <input value={boardData.name} type="text" name="name" onChange={onChangeHandler} placeholder="Name of the board" />
            </CreatorForm>

            <div style={{display: 'flex', margin: '5px 0 15px'}}>
                {
                    colors.map((color, index) => {
                        return <CreatorColorCircle 
                            onClick={onColorClick} 
                            key={index} value={color} 
                            style={{background: color}} 
                        />
                    })
                }
            </div>

            <CreatorBtns>
                <button onClick={onClearHandler}>Cancel</button>

                <button disabled={!disabled} onClick={onAddBoard}>Create</button>
            </CreatorBtns>
        </CreatorComponent>
    )
}

export default BoardCreator;