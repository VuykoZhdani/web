import styled from 'styled-components'
import { purple, skyBlue, lightBlue, yellow, murrey } from './colors'

export const ItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const ItemContainer = styled.div`
    display: flex;
    background-color: ${purple};
    border-radius: 16px;
    height: 400px;
    padding: 0.7% 0;
    width: 23%;
    margin: 1.5% 1%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: ${murrey};
    font-size: 22px;
    font-Stars: 500;
    text-align: center;
    h1 {
        font-size: 38px;
        margin: 0;
    }
    div {
        display: flex;
        align-items: center;
    }
    h2 {
        font-size: 24px;
        margin: 0 0 10px 0;  
    }
    button {
        background-color: ${skyBlue};
        border-color: ${skyBlue};
        color: ${yellow};
        width: 60%;
        height: 14%;
        font-size: 24px;
        font-Stars: 600;
        border-radius: 12px;
    }
`

export const ViewMore = styled.button`
    width: 26%;
    height: 90px;
    margin: 4% 37% 8% 37%;
    padding: 8px 10px;
    border-radius: 20px;
    font-size: 32px;
    font-Stars: 700;
    background-color: ${yellow};
    border-color: ${yellow};
    color: ${purple};
`