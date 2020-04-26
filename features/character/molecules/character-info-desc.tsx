import React from 'react'
import Link from 'next/link';
import styled from 'styled-components'

import { format } from 'date-fns';
import { CharacterDescProps, CharacterDescItem } from '../atoms';

export const CharacterDescWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;

    & > div {
        flex: 0 1 33.333%;
        margin-bottom: 30px;
     
        @media (max-width: 1360px) {
            flex: 0 1 50%;
        }
    }
`;

export const CharacterDesc: React.FC<CharacterDescProps> = ({ status, species, gender, created, origin, location }) => (
    <CharacterDescWrap>
        {
            status && (
                <CharacterDescItem status={status}>
                    <div>Status</div>
                    <span>{status}</span>
                </CharacterDescItem>
            )
        }
        {
            species && (
                <CharacterDescItem>
                    <div>Species</div>
                    <span>{species}</span>
                </CharacterDescItem>
            )
        }
        {
            gender && (
                <CharacterDescItem>
                    <div>Gender</div>
                    <span>{gender}</span>
                </CharacterDescItem>
            )
        }
        {
            created && (
                <CharacterDescItem>
                    <div>Created</div>
                    <span>{format(new Date(created), 'dd MMMM yyyy')}</span>
                </CharacterDescItem>
            )
        }
        {
            origin?.id && (
                <CharacterDescItem>
                    <div>Origin</div>
                    <Link href="/location/[id]" as={`/location/${origin.id}`}>
                        <a>{origin.name}</a>
                    </Link>
                </CharacterDescItem>
            )
        }
        {
            location?.id && (
                <CharacterDescItem>
                    <div>Location</div>
                    <Link href="/location/[id]" as={`/location/${location.id}`}>
                        <a>{location.name}</a>
                    </Link>
                </CharacterDescItem>
            )
        }
    </CharacterDescWrap>
)
