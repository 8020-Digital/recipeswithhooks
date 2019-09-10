
import React, { useState } from 'react'
import { useLazyQuery } from '@apollo/react-hooks';
import { SEARCH_RECIPES } from '../../queries'

import { Jumbotron, FormControl, Button, InputGroup } from 'react-bootstrap'




export default () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [getRecipes, { error, data, loading }] = useLazyQuery(SEARCH_RECIPES, { variables: { searchTerm }, skip: searchTerm });

    if (error) {
        console.log(error)
    }

    const renderData = () => {
        if (data && data.searchRecipes) {
            return (
                <ul>
                    {
                        data.searchRecipes.map((item, index) => {
                            return <li key={index}>{item.name}</li>
                        })
                    }
                </ul>
            )
        }
    }


    return (
        <Jumbotron>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search here"
                    aria-label="Search here"
                    aria-describedby="basic-addon2"
                    onChange={(event) => { setSearchTerm(event.target.value) }}
                />
                <InputGroup.Append>
                    <Button onClick={() => { return getRecipes({ variables: { searchTerm } }) }} variant="outline-secondary">Search</Button>
                </InputGroup.Append>
            </InputGroup>
            {
                loading && <label>Carregando...</label>
            }

            {renderData()}
        </Jumbotron >
    )
}