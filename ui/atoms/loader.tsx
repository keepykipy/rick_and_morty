import React from 'react'
import styled from 'styled-components';

export const Loader = () => (
    <StyledLoader>
        <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </StyledLoader>
)

const StyledLoader = styled.div`
    width: 204px;
    height: 204px;
    overflow: hidden;
    background: none;
    margin: auto;

    & > div {
        width: 100%;
        height: 100%;
        margin: -1px;
        display: flex;
        flex-wrap: wrap;

        & > div {
            width: calc(50% - 2px);
            height: calc(50% - 2px);
            margin: 1px;
            background: #52b548;
            animation: colorChange 2s ease-in-out infinite;
            box-sizing: content-box;

            &:first-child {
                animation-delay: 0.5s;
            }

            &:nth-child(2) {
                animation-delay: 1s;
            }

            &:nth-child(3) {
                animation-delay: 2s;
            }

            &:last-child {
                animation-delay: 1.5s;
            }
        }
    }

    @keyframes colorChange {
        0% {
            background: #41455f;
        }
        25% {
            background: #41455f;
        }
        25.25% {
            background: #52b548;
        }
        100% {
            background: #52b548;
        }
    }
`;
