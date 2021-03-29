import React from "react"
import { NavLinks } from "../shared/links"

import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
  return (
    <nav className="container flex justify-between px-5">
      <div className=" flex flex-grow-1 flex-shrink-0">
        <StaticImage
          className=""
          src="../../images/stretch_loft_logo.jpeg"
          alt="The Stretch Loft Logo"
          placeholder="blurred"
          width={160}
        />
      </div>
      {/* <div className="flex w-96 justify-between"> */}
        <ul className="max-w-md flex font-white">
            <NavLinks textColor="white"/>
        </ul>
      {/* </div> */}
    </nav>
  )
}

export default Navbar
