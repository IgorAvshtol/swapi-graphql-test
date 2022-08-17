import { gql } from '@apollo/client';

export const ALL_HEROES = gql`
    query GetAllPeople($after: String) {
        allPeople(first: 4, after: $after) {
            people {
                name
                id
            }
            totalCount
            pageInfo {
                endCursor
            }
        }
    }
`;

export const CURRENT_HERO = gql`
    query GetCurrentHero($id: ID!) {
        person(id: $id) {
            name
            birthYear
            gender
            species {
                name
            }
            homeworld {
                name
            }
        }
    }
`;
