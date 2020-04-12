import styled from "styled-components"

export const TaskComponent = styled.div`
    width: 100%;
    padding: 10px;
    box-shadow: 1px 1px 6px #dcdcdc;
    border-radius: 10px;
    text-align: left;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    touch-action: none;
    animation: fadeIn .5s ease;

    & > section {
        width: 75%;
    }

    & > div {
        width: 12.5%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;

        &:hover {
            opacity: 0.5;
        }
    }
`