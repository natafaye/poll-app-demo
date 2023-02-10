import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand } from 'reactstrap'

export default function TopBar() {
    return (
        <Navbar
            color="secondary"
            dark
        >
            <NavbarBrand tag={Link} to="/">
                Poll App
            </NavbarBrand>
        </Navbar>
    )
}
