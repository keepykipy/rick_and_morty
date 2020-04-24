import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';

import { Episode } from '../model'

interface EpisodeSlideItem extends Episode {
    className?: string;
}

const StyledCharacterInfoEpisode = styled.div`
    border-radius: 10px;
    box-shadow: 0 0px 8px 2px rgba(16,0,43,0.1);
    background-color: #ffffff;
    padding: 16px 24px 24px 24px;
    cursor: pointer;
    transition: all .2s ease-in-out;

    & > div {
        font-size: 18px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.78;
        letter-spacing: normal;
        color: #10002b;
    }

    & > span {
        display: block;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.07px;
        color: #8a959d;
        position: relative;
        padding-left: 16px;

        &:after {
            content: '';
            position: absolute;
            background-color: #ff5756;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    &:hover {
        box-shadow: 0 0px 8px 0 rgba(16,0,43,0.1);
    }
`;

export const CharacterInfoEpisode: React.FC<EpisodeSlideItem> = ({ air_date, id, name, className }) => {
    return (
        <Link href="/location/[id]" as={`/location/${id}`}>
            <StyledCharacterInfoEpisode className={className}>
                <div>{name}</div>
                <span>{air_date}</span>
            </StyledCharacterInfoEpisode>
        </Link>
    )
}
