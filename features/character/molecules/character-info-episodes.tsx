import React from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';

import { CharacterInfoEpisode } from '../atoms';
import { Episode } from '../model';
import { ArrowButtonLeft, ArrowButtonRight } from '../../../ui';

export interface Episodes {
    episodes: Episode[];
}

const StyledCharacterInfoEpisodesSliderWrap = styled.div`
    & > div {
        padding-top: 30px;
        padding-bottom: 30px;
        padding-left: 10px;
        padding-right: 10px;
    }
`;

export const CharacterInfoEpisodesSlider: React.FC<Episodes> = ({ episodes }) => {
    const params = {
        slidesPerView: 3,
        spaceBetween: 30,
    }

    return (
        <StyledCharacterInfoEpisodesSliderWrap>
            <ArrowButtonLeft />
            <Swiper {...params}>
                {
                    episodes?.map(episode => (
                        <CharacterInfoEpisode key={episode?.name} className="swiper-slide" {...episode} />
                    ))
                }
            </Swiper>
            <ArrowButtonRight />
        </StyledCharacterInfoEpisodesSliderWrap>
    )
}
