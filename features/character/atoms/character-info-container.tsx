import React from 'react';
import styled from 'styled-components'
import { Container } from '../../../ui';

export interface CharacterInfoContainerProp {
    children: React.ReactNode;
}

export const CharacterInfoWrap = styled.div`
    box-shadow: 0 10px 8px 0px rgba(16,0,43,0.1);
    margin-bottom: 55px;
    margin-top: 32px;
`;

export const CharacterInfoContainer: React.FC<CharacterInfoContainerProp> = ({ children }) => (
    <CharacterInfoWrap>
        <Container>
            {children}
        </Container>
    </CharacterInfoWrap>
)
