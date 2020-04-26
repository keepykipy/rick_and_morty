import styled from 'styled-components'

import ArrowLeft from '../../../public/images/left-arrow.svg';
import ArrowRight from '../../../public/images/right-arrow.svg';

export const SearchArrowLeft = styled(ArrowLeft)`
    position: fixed;
    top: 50%;
    left: 48px;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition: filter .2s;
    filter: blur(1px);

    &:hover {
        filter: blur(0) drop-shadow(0px 0px 0px #000000);
    }
`;

export const SearchArrowRight = styled(ArrowRight)`
    position: fixed;
    top: 50%;
    right: 48px;
    transform: translate(50%, -50%);
    cursor: pointer;
    transition: filter .2s;
    filter: blur(1px);

    &:hover {
        filter: blur(0) drop-shadow(0px 0px 0px #000000);
    }
`;
