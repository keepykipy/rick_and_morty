import React from 'react'
import styled from 'styled-components'

interface CharacterInfoPicProps {
    src: string;
    name?: string;
}

export const StyledCharacterPic = styled.div`
    max-width: 352px;
    width: 100%;
    min-height: 512px;
    max-height: 512px;
    border-radius: 14px;
    overflow: hidden;
    position: relative;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        position: absolute;
        top: 0;
        left: 0;
    }

    & > div {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(0deg, rgba(0,0,0,.5) 0%, rgba(29,15,58,0) 50%);
    }

    & > span {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 18px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.2;
        letter-spacing: normal;
        color: #ffffff;
    }
`;

export const CharacterInfoPic: React.FC<CharacterInfoPicProps> = ({ src, name }) => (
    <StyledCharacterPic>
        <img src={src} alt={name} />
        <div></div>
        <span>{name}</span>
    </StyledCharacterPic>
)
