import React, { Fragment } from 'react'
import LinksNavbar from '../Navbar'
import NavbarTop from '../NavbarTop'
import NavbarMiddle from '../NavbarMiddle'


export default function Header() {
  return (
    <Fragment>
    <NavbarTop/>
    <NavbarMiddle/>
    <LinksNavbar/>
    </Fragment>
  )
}
