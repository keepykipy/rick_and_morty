import gql from 'graphql-tag'

export const SEARCH_CHARACTERS_BY_NAME = gql`
    query SearchCharacterByName($characterName: String!, $page:Int) {
        characters( page:$page, filter: { name: $characterName }) {
            info {
                next
                prev
            }
            results {
                name
                image
                id
            }
        }
    }
`

export const SEARCH_ALL_CHARACTERS = gql`
    query SearchAllCharacters($page:Int) {
        characters(page: $page) {
            info {
                next
                prev
            }
            results {
                id
                name
                image
            }
        }
    }
`

export const SEARCH_CHARACTER_BY_ID = gql`
    query SearchCharacterById($characterId: ID!) {
        character(id: $characterId) {
            name
            status
            species
            gender
            image
            created
            origin {
                id
                name
            }
            location {
                id
                name
            }
            episode {
                id
                name
                air_date
            }
        }
    }
`
