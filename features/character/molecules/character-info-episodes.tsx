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
    position: relative;
    
    & > div {
        padding-top: 30px;
        padding-bottom: 30px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .slider-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;

        &.swiper-button-disabled {
            opacity: 0;
            pointer-events: none;
        }

        &.button-prev {
            left: 0;
        }

        &.button-next {
            right: 48px;
        }
    }
`;

export const CharacterInfoEpisodesSlider: React.FC<Episodes> = ({ episodes }) => {
    const params = {
        slidesPerView: 2,
        spaceBetween: 30,
        noSwiping: episodes?.length < 2 ?? false,
        rebuildOnUpdate: true,
        grabCursor: true,
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev'
        },
        renderPrevButton: () => <ArrowButtonLeft className="slider-button button-prev" />,
        renderNextButton: () => <ArrowButtonRight className="slider-button button-next" />,
    }

    return (
        <StyledCharacterInfoEpisodesSliderWrap>
            <Swiper {...params}>
                {
                    episodes?.map(episode => (
                        <CharacterInfoEpisode key={episode?.name} className="swiper-slide" {...episode} />
                    ))
                }
            </Swiper>
        </StyledCharacterInfoEpisodesSliderWrap>
    )
}
