import { styled } from "styled-components";

export const Card = styled.div`
    height: auto;
    width: 700px;
    background-color: #FFFFFF;
    margin: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;

    h2{
        font-size: 24px;
        color: rgb(247, 182, 0);
    }

    hr{
        margin: 10px 0;
    }

    p{
        margin-top: 5px;
    }

    a{
        margin-top: 5px;
        color: rgb(247, 182, 0);
        text-decoration: none;
    }

    a:hover{
        text-decoration: underline;
    }
`