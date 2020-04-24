import React from 'react';
import Link from 'next/link'
import styled, { css } from 'styled-components'

import { device } from '../themes';
import { Card, CardProp } from '../atoms';

interface CharacterCardProp extends CardProp {
    children: React.ReactNode;
    href: string;
    as?: string;
}   

export const CharacterCard: React.FC<CharacterCardProp> = ({ children, gap, href, as }) => (
    <Link
        href={href}
        as={as}
    >
        <StyledCard gap={gap}>
            { children }
        </StyledCard>
    </Link>
)

const StyledCard = styled(Card)`
    cursor: pointer;
    position: relative;

    &:hover {
        & > img {
            transform: scale(1.05);
        }

        & > div {
            opacity: 1;
        }
    }

    
    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transition: all .4s ease-in-out;
    }

    & > div {
        opacity: 0;
        position: absolute;
        transition: all .2s ease-in-out;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        color: #ffffff;
        background-color: rgba(0, 0, 0, 0.4);
        width: calc(100% - 20px);
        text-align: center;
        padding: 10px;
        border-radius: 8px;
        pointer-events: none;
    }


    @media ${device.laptop} {
        ${p => p.gap
            ? css`max-width: calc(33.3333% - (${p.gap} * 2))`
            : css`max-width: calc(33.3333% - 30px)`
        }
    }

    @media ${device.tablet} {
        ${p => p.gap
            ? css`max-width: calc(50% - (${p.gap} * 2))`
            : css`max-width: calc(50% - 30px)`
        }
    }

    @media ${device.mobileM} {
        ${p => p.gap
            ? css`max-width: calc(100% - (${p.gap} * 2))`
            : css`max-width: calc(100% - 30px)`
        }
    }

    ${p => p.gap
        ? css`max-width: calc(25% - (${p.gap} * 2))`
        : css`max-width: calc(25% - 30px)`
    }
`;
