import React from 'react'
import { withRouter } from 'react-router-dom'

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'


const Navigation = (props) => {

    let navigate = props.history

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand onClick={() => { navigate.push("/") }}>Recipes</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => { navigate.push("signup") }}>
                        SignUp
                    </Nav.Link>
                    <Nav.Link onClick={()=>{navigate.push("search")}}>Search</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation)