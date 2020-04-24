import React from 'react'

import { useStore } from 'effector-react';

import { Loader, Error, CharacterCard } from '../../../ui';
import { Row } from '../../../ui';

import { $characters, $loading, Character, nextPage, prevPage } from '../model';
import { SearchResultsContainer, SearchArrowLeft, SearchArrowRight } from '../atoms';

export const SearchResult = () => {
    const loading = useStore($loading);
    const characters = useStore($characters);
    const { info, results }: any = characters;
    const gap = '15px';

    return (
        <SearchResultsContainer>
            {
                loading
                    ? <Loader />
                    : (
                        characters
                            ? (
                                <Row 
                                    mt={gap} 
                                    gap={gap} 
                                    wrap='wrap'
                                >
                                    {
                                        results?.map(({ name, image, id }: Character) => (
                                            <CharacterCard
                                                key={id}
                                                gap={gap}
                                                href='/character/[id]'
                                                as={`/character/${id}`}
                                            >
                                                <img src={image} alt={name} />
                                                <div>{name}</div>
                                            </CharacterCard>
                                        ))
                                    }
                                </Row>
                            )
                            : <Error />
                    )
                    
            }
            { info?.prev && <SearchArrowLeft onClick={() => prevPage(info?.prev as number)} /> }
            { info?.next && <SearchArrowRight onClick={() => nextPage(info?.next as number)} /> }
        </SearchResultsContainer>
    )
}
