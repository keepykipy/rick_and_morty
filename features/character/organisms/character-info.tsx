import React from 'react';

import { useStore } from 'effector-react'
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

import { apolloErrorHandler } from '../../../lib';
import { SEARCH_CHARACTER_BY_ID } from '../../../queries';
import { $character, setCharacter, Episode } from '../model';
import { CharacterInfoContainer, CharacterInfoPic, CharacterDescProps } from '../atoms';
import { CharacterDesc, CharacterInfoEpisodes } from '../molecules';
import { Row, Loader, Error, Col } from '../../../ui';

export const CharacterInfo:React.FC = () => {
    const router = useRouter();
    const id = router?.query?.id;
    const character = useStore($character);

    const { loading, error } = useQuery(
        SEARCH_CHARACTER_BY_ID,
        {
            variables: { characterId: id },
            onError: (error) => apolloErrorHandler(error),
            onCompleted: (data) => setCharacter(data?.character)
        }
    );

    return (
        loading
            ? <Loader />
            : (
                error
                    ? <Error />
                    : (
                        <CharacterInfoContainer>
                            <Row>
                                <CharacterInfoPic src={character?.image as string} name={character?.name} />
                                <Col>
                                    <CharacterDesc {...character as CharacterDescProps} />
                                    {
                                        character?.episode && (
                                            <CharacterInfoEpisodes episodes={character.episode as Episode[]} />
                                        )
                                    }
                                </Col>
                            </Row>
                        </CharacterInfoContainer>
                    )
            )
    )
}
