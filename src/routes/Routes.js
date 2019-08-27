import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Recipes from '../pages/recipes/Recipes';
import Signup from '../pages/signup/Signup'
import Signin from '../pages/signin/Signin'

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={Recipes} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Redirect to="/" />
        </Switch>
    )
}