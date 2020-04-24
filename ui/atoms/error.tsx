import React from 'react'
import styled from 'styled-components'

interface ErrorProps {
    errorText?: string;
    empty?: boolean;
}

export const Error: React.FC<ErrorProps> = ({ errorText = 'Sorry, something gone wrong...', empty }) => (
    <ErrorWrap>
        { !empty && <div>{ errorText }</div> }
        <img src='/images/error.png' alt="Error" />
    </ErrorWrap>
)

const ErrorWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;

    & > div {
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.78;
        letter-spacing: normal;
        color: #ff363f;
    }
`;
