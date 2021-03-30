import React from "react"
import { NavLinks } from "../shared/links"

import { StaticImage } from "gatsby-plugin-image"

const navStyles = `justify-between bg-black py-4`
const mainNavStyles = `${navStyles} hidden sm:flex px-3 md:px-14 `
const mobileNavStyles = `${navStyles} fixed flex-1 sm:hidden px-2 fixed bottom-0 left-0 w-full`

const MainNav = (
  <nav className={mainNavStyles}>
    <div className=" flex flex-grow-1 flex-shrink-0 w-40 md:w-60">
      <StaticImage
        className=""
        src="../../images/stretch_loft_logo.jpeg"
        alt="The Stretch Loft Logo"
        placeholder="blurred"
        objectFit="cover"
      />
    </div>
    <ul className="max-w-md flex font-white">
      <NavLinks textColor="white" type="main"/>
    </ul>
  </nav>
)

const MobileNav = (
  <nav className={mobileNavStyles}>
    <ul className="flex font-white justify-between max-w-lg mx-auto">
      <NavLinks textColor="white" type="mobile" />
    </ul>
  </nav>
)

const Navbar = () => {
  return (
    <>
      {MainNav}
      {MobileNav}
    </>
  )
}

export default Navbar
