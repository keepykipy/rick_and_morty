import React from 'react';
import styled from 'styled-components';

import { CharacterInfoEpisode } from '../atoms';
import { Episode } from '../model';
import { device } from '../../../ui';

export interface Episodes {
    episodes: Episode[];
}

const StyledCharacterInfoEpisodesWrap = styled.div`
    position: relative;
    display: flex;
    flex-flow: row wrap;
    padding: 10px;
    margin-left: -20px;
    margin-right: -10px;
    margin-bottom: -20px;

    @media ${device.laptop} {
        margin: 0;
        margin-left: -10px;
    }
    
    & > div {
        flex: 0 1 calc(33.3333% - 20px);
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 20px;
        
     
        @media (max-width: 1360px) {
            flex: 0 1 calc(50% - 20px);
        }

        @media ${device.laptop} {
            flex: 0 1 100%;
            margin: 0;
            margin-bottom: 10px;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
`;

export const CharacterInfoEpisodes: React.FC<Episodes> = ({ episodes }) => {

    return (
        <>
            <h2>Episodes:</h2>
            <StyledCharacterInfoEpisodesWrap>
                {
                    episodes?.map(episode => (
                        <CharacterInfoEpisode key={episode?.name} {...episode} />
                    ))
                }
            </StyledCharacterInfoEpisodesWrap>
        </>
    )
}
