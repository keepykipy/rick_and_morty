import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components';
import { useStore } from 'effector-react'
import { useDebounce } from 'use-debounce';
import { useLazyQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { trimEventValue, apolloErrorHandler } from '../../../lib';

import { SearchInput } from '../atoms'
import { Container } from '../../../ui';

import { SEARCH_CHARACTERS_BY_NAME, SEARCH_ALL_CHARACTERS } from '../../../queries';
import { replaceCharacters, loadCharacters, errorHandler, $page, resetPage } from '../model';

const SEARCH_INTERVAL = 400;

export const SearchBar = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [searchValue, setSearchValue] = useState<string>('');
    const [debouncedValue] = useDebounce<string>(searchValue, SEARCH_INTERVAL);
    const page = useStore($page);
    const router = useRouter();
    const searchQuery = router?.query?.q;

    const [searchCharacter, { loading: loadingCharacter }] = useLazyQuery(
        SEARCH_CHARACTERS_BY_NAME, 
        {
            variables: { page, characterName: debouncedValue },
            onError: (error) => apolloErrorHandler(error, errorHandler),
            onCompleted: (data) => replaceCharacters(data?.characters)
        }
    );

    const [searchAllCharacters, { loading: loadingAllCharacters }] = useLazyQuery(
        SEARCH_ALL_CHARACTERS, 
        {
            variables: { page },
            onError: (error) => apolloErrorHandler(error, errorHandler),
            onCompleted: (data) => replaceCharacters(data?.characters)
        }
    );

    useEffect(() => {
        if (loadingAllCharacters || loadingCharacter) loadCharacters();
    }, [loadingAllCharacters, loadingCharacter]);

    useEffect(() => {
        if (searchQuery) {
            setSearchValue(searchQuery as string);
            searchCharacter();

            return;
        }
        
        searchAllCharacters();
    }, []);

    useEffect(() => {
        if (debouncedValue) {
            const queryParams = new URLSearchParams();
            queryParams.set("q", debouncedValue);

            resetPage();
            searchCharacter();
            
            router.push(`/?${queryParams}`)

            return;
        }

        router.push('/');
    }, [debouncedValue]);

    const onSearchInputChange = (event: any) => {
        const value = trimEventValue(event);
        
        setSearchValue(value);
    }

    return (
        <SearchBarWrap>
            <Container>
                <SearchInput
                    label='Имя персонажа'
                    onChange={onSearchInputChange}
                    value={searchValue}
                    ref={inputRef as any}
                />
            </Container>
        </SearchBarWrap>
    )
}

const SearchBarWrap = styled.div`
    background: linear-gradient(90deg, rgba(51,37,83,1) 0%, rgba(29,15,58,1) 100%);
    padding-top: 24px;
    padding-bottom: 24px;
`;
