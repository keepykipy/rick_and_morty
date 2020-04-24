import styled from 'styled-components'

export interface CardProp {
    gap?: string
}

export const Card = styled.div<CardProp>`
    width: 100%;
    min-height: 300px;
    max-height: 300px;
    overflow: hidden;
    border-radius: 10px;
`;
