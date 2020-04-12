import styled from 'styled-components';

export const CreatorComponent = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    width: 450px;
    height: 300px;
    background: #fff;
    border-radius: 15px;
    margin: 20px;
    box-shadow: 1px 2px 7px #a9a9a9;
    margin: 0 auto;
`

export const CreatorTitle = styled.p`
    width: 70%;
    font-size: 20px;
    font-weight: 500;
    padding: 15px 20px;
    border-radius: 10px;
    text-align: center;
`

export const CreatorColorCircle = styled.div`
    border-radius: 50%;
    border: none;
    width: 35px;
    height: 35px; 
    opacity: 0.7;
    box-shadow: 1px 1px 7px #dcdcdc;
    margin: 5px;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`

export const CreatorBtns = styled.div`
    display: flex;
    flex-direction: center;
    align-items: center;
    width: 100%;
    outline: none;

    & > button {
        width: 220px;
        height: 35px;
        margin: 10px;
        border: none;
        box-shadow: 0.5px 0.5px 4px #a9a9a9;
        border-radius: 5px;
        font-weight: 500;
        font-size: 16px;
        cursor: pointer;
        background: #f2f2f2;

        &:hover {
            background: #fff;
        }
    }
`

export const CreatorForm = styled.form`
    margin: 20px 0 10px;

    & > input {
        background-color: hsla(0,0%,100%,.4);
        border: none;
        box-shadow: 2px 2px 10px #dcdcdc;
        width: 250px;
        height: 40px;
        padding: 10px;
        border-radius: 7px;
        font-size: 18px;
    }
`