import { createEvent, createStore } from 'effector'

export interface CharactersLocation {
    id: number | string;
    name: string;
}

export interface Episode {
    id: number | string;
    name: string;
    air_date: string;
}

export interface FullCharacter {
    name?: string;
    id?: number | string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
    origin?: CharactersLocation;
    location?: CharactersLocation;
    image?: string;
    episode?: Episode[];
    created?: string;
}

export const setCharacter = createEvent<FullCharacter | null>();
export const resetCharacter = createEvent();

export const $character = createStore<FullCharacter | null>({})
    .on(setCharacter, (_, obj) => obj)
    .reset(resetCharacter);
