
import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks';
import { SIGNUP_USER } from '../../mutations'



export default () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [signupUser, { error, data, loading }] = useMutation(SIGNUP_USER);


    if (error) {
        alert("Error no cadastro")
    }

    if (loading) {
        return (<div><h3>Carregando...</h3></div>)
    }

    console.log(data)

    return (
        <div>
            <h2>Signup</h2>

            <form onSubmit={(e) => {
                e.preventDefault();
                signupUser({ variables: { username, email, password } })
            }}>
                <input type="text" name="username" placeholder="Username" onChange={(event) => { setUsername(event.target.value) }} value={username} />
                <input type="email" name="email" placeholder="e-mail" onChange={(event) => { setEmail(event.target.value) }} value={email} />
                <input type="password" name="password" placeholder="Password" onChange={(event) => { setPassword(event.target.value) }} value={password} />
                <input type="password" name="confirmPassword" placeholder="Confirme password" onChange={(event) => { setConfirmPassword(event.target.value) }} value={confirmPassword} />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )

}