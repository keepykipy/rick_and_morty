import React from 'react';
import Link from 'next/link'
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

import PlainArrowLeft from '../../public/images/plain-arrow-left.svg';

import ArrowLeft from '../../public/images/left-arrow.svg';
import ArrowRight from '../../public/images/right-arrow.svg';

interface BackwardButtonProps {
    text?: string;
    func?: () => void;
    href?: string;
    mt?: string;
}

interface StyledBackwardButtonProp {
    mt?: string;
}

export const SearchButton = styled.div`
    width: 24px;
    height: 24px;
    mask-image: url('/images/search-icon.svg');
    mask-position: center;
    mask-size: contain;
    background-color: #ffffff;
    cursor: pointer;
`;

export const StyledBackwardButton = styled.div<StyledBackwardButtonProp>`
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 21px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.1px;
    color: #10002b;

    & > svg {
        margin-right: 16px;

        & > path {
            transition: all .2s ease-in-out;
        }
    }

    &:hover {
        & > svg {
            & > path {
                fill: ${p => p.theme.colors.selected};
            }
        }
    }

    ${p => p.mt && css`margin-top: ${p.mt};`}
`;

export const BackwardButton: React.FC<BackwardButtonProps> = ({mt, text = 'Back', func }) => {
    const router = useRouter()

    return (
        <StyledBackwardButton mt={mt} onClick={func ?? router.back}>
            <PlainArrowLeft />
            {text}
        </StyledBackwardButton>
    )
}

export const BackToMainButton: React.FC<BackwardButtonProps> = ({ text, href, mt }) => (
    <Link href={href as string}>
        <StyledBackwardButton mt={mt}>
            <PlainArrowLeft />
            {text}
        </StyledBackwardButton>
    </Link>
)

export const ArrowButtonLeft = styled(ArrowLeft)`
    cursor: pointer;
    
    circle {
        transition: all .2s ease-in-out;
        fill-opacity: .2;
        fill: #000000;
    }

    &:hover {
        circle {
            fill-opacity: .1;
        }
    }
`;

export const ArrowButtonRight = styled(ArrowRight)`
    cursor: pointer;
    
    circle {
        transition: all .2s ease-in-out;
        fill-opacity: .2;
        fill: #000000;
    }

    &:hover {
        circle {
            fill-opacity: .1;
        }
    }
`;
