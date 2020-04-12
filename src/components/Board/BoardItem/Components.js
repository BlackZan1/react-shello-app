import styled from 'styled-components';

export const BoardItemComponent = styled.div`
    width: 270px;
    min-height: 100px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 1px 2px 8px #dcdcdc;
    padding: 15px 8px 20px;
    position: relative;
    animation: fadeIn .4s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  

    & > p {
        font-weight: 400;
        font-size: 20px;
        margin: 5px 0;
        text-align: center;
    }

    & > input {
        width: 95%;
        height: 40px;
        margin: 10px auto;
        border: 1px solid #dcdcdc;
        border-radius: 10px;
        text-indent: 10px;
    }
`

export const BoardItemClose = styled.div`
    position: absolute;
    right: -15px;
    top: -15px;
    width: 35px;
    height: 35px;
    opacity: 0.3;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover {
        opacity: 1;
    }

    &:before, &:after {
        position: absolute;
        content: ' ';
        height: 20px;
        width: 2px;
        background-color: #fff;
    }

    &:before {
        transform: rotate(45deg);
    }

    &:after {
        transform: rotate(-45deg);
    }
`