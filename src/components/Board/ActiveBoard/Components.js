import styled from 'styled-components';

export const ActiveBoardComponent = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    animation: fadeIn .4s ease;

    & > h1 {
        width: 240px;
        heigth: 50px;
        border-radius: 10px;
        text-align: center;
        padding: 15px 20px;
        font-weight: 500;
        margin: 0 0 0 60px;
    }
`

export const ActiveBoardList = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin: 50px 0 0 0;
    padding: 0 0 30px 0;

    & > button, & > div {
        margin: 0 0 0 60px;
    }

    & > button {
        width: 150px;
        height: 80px;
        border: 1px solid #000;
        font-size: 20px;
        background: #fff;
        box-shadow: 1px 2px 7px #a9a9a9;
        border-radius: 15px 15px 0 15px;
        cursor: pointer;

        &:hover {
            background: #f2f2f2;
        }
    }
`

export const ActiveBoardForm = styled.div`
    width: 150px;
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    background: #fff;
    box-shadow: 1px 2px 7px #a9a9a9;
    justify-content: center;
    align-items: center; 
    border-radius: 15px 15px 0 15px;
    border: 1px solid #000;

    & > input {
        width: 100%;
        height: 40px;
        text-indent: 5px;
        border: 1px solid #dcdcdc;
        border-radius: 5px;
    }

    & > button {
        margin: 15px 0 0 0;
        width: 95%;
        font-size: 18px;
        height: 30px;
        border-radius: 5px;
        border: none;
        cursor: pointer;

        &:hover {
            filter: brightness(90%);
        }
    }
`