
import React from 'react'

import { useQuery } from '@apollo/react-hooks'

import { GET_ALL_RECIPES } from '../../queries'





function render(error, data, loading) {
    if (loading) {
        return (
            <h5>Loading...</h5>
        )
    }

    if (error) {
        return (
            <h5>Error...</h5>
        )
    }

    if (data) {
        return renderData(data)
    }
}

function renderData(data) {

    let { getAllRecipes } = data

    return (
        <ul>
            {getAllRecipes.map((item, index) => (
                <li key={index} >{item.name}</li>
            ))}
        </ul>
    )
}

export default () => {

    let { error, data, loading } = useQuery(GET_ALL_RECIPES)

    return (
        <div>
            <h2>Recipes</h2>
            {render(error, data, loading)}
        </div>
    )

}