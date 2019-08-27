import { gql } from 'apollo-boost'

export const GET_LOCAL_DATA = gql`
  query {
    localValues @client {
      value1
      value2
    }
  }
`;

export const GET_ALL_RECIPES = gql`
    query {
        getAllRecipes {
            _id 
            name
        }
    }
`