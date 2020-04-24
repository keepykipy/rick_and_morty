import { createEvent, createStore } from 'effector'

export interface Character {
    name: string;
    image: string;
    id: string;
}

export interface CharactersInfoProp {
    next: number | null;
    prev: number | null;
}

export interface CharactersResult {
    info?: CharactersInfoProp;
    results?: Character[];
}

export const errorHandler = createEvent();
export const loadCharacters = createEvent();
export const replaceCharacters = createEvent<CharactersResult>();
export const resetCharactersResult = createEvent();

export const nextPage = createEvent<number>(); 
export const prevPage = createEvent<number>(); 
export const resetPage = createEvent();

export const $characters = createStore<CharactersResult | null>({})
    .on(replaceCharacters, (state, newState) => ({
        ...state,
        info: newState?.info ?? state?.info,
        results: newState?.results
    }))
    .on(errorHandler, () => null)
    .reset(resetCharactersResult);

export const $loading = createStore<boolean>(true)
    .on(errorHandler, () => false)
    .on(replaceCharacters, () => false)
    .on(loadCharacters, () => true)
    .on(resetCharactersResult, () => true);

export const $page = createStore<number>(1)
    .on(nextPage, (_, num) => num)
    .on(prevPage, ( _, num ) => num)
    .reset(resetPage);
