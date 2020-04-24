import styled, { css } from 'styled-components';

export interface CharacterDescLocation {
    id: string | number;
    name: string;
}


export interface CharacterDescProps {
    status?: string;
    species?: string;
    gender?: string;
    created?: string;
    origin?: CharacterDescLocation;
    location?: CharacterDescLocation;
}


export const CharacterDescItem = styled.div<CharacterDescProps>`
    display: flex;
    flex-direction: column;

    & > div {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.71;
        letter-spacing: 0.07px;
        color: #8a959d;
    }

    & > span {
        display: block;
        font-size: 18px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;

        ${p => (p.status === 'Dead')
            ? css`color: red;`
            : (p.status === 'Alive')  
                ? css`color: ${p.theme.colors.selected};`
                : css`color: #10002b;`
        }
    }

    & > a {
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: 0.3px;
        color: ${p => p.theme.colors.selected};
        text-decoration: none;
        transition: all .2s ease-in-out;

        &:hover {
            color: ${p => p.theme.colors.hover}
        }
    }
`;
