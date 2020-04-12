import styled from 'styled-components';

export const BoardComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 120px;
    border-radius: 15px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 1px 2px 6px #a9a9a9;
    margin: 20px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    animation: fadeIn .4s ease;

    & > p {
        font-size: 18px;
        font-weight: 400;
        color: #fff;
        position: absolute;
        border-radius: 50%;
        top: 10px;
        right: 0;
        left: 0;
        height: 300px;
        width: 300px;
        text-align: center;
        padding: 30px 0 0 0;
        opacity: 0.9;
        animation: fadeInUp .5s ease;
    }

    &:hover {
        transform: scale(1.2); 
    }
`