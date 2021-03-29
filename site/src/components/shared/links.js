import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const navLinks = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Team",
    href: "/team",
  },
  {
    text: "Services",
    href: "/services",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Faqs",
    href: "/faqs",
  },
]

export const NavLinks = ({ textColor }) => {
  const linkStyles = () => {
    let styles = `
      flex 
      items-center 
      text-${textColor} 
      h-full
      py-2 
      px-4
      hover:border-b-4 
      hover:border-blue 
      hover:animate-pulse 
      font-thin 
      letter 
      tracking-widest;
    `
    return styles
  }
  const activeStyles = () => {
    let styles = `
      font-bold
      border-b-4 
      border-blue
    `
    return styles
  }

  return (
    <>
      {navLinks.map((link, i) => (
        <li className="flex" key={i}>
          <Link
            className={linkStyles()}
            activeClassName={activeStyles()}
            to={link.href}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </>
  )
}

NavLinks.propTypes = {
  optionalEnum: PropTypes.oneOf(["white", "black"]),
}
