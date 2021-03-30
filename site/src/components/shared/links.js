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

export const NavLinks = ({ textColor, type }) => {
  const linkStyles = `flex items-center text-${textColor} py-2 h-full hover:border-b-4 hover:border-blue hover:animate-pulse font-thin uppercase tracking-widest`
  const mainLinkStyles = `${linkStyles} sm:px-2 md:px-4 text-md`
  const mobileLinkStyles = `${linkStyles} text-xs`
  const activeStyles = `font-normal	border-b-4 border-blue`

  const mainNavLink = link => (
    <Link className={mainLinkStyles} activeClassName={activeStyles} to={link.href}>
      {link.text}
    </Link>
  )
  const mobileLink = link => (
    <Link className={mobileLinkStyles} activeClassName={activeStyles} to={link.href}>
      {link.text}
    </Link>
  )

  return (
    <>
      {navLinks.map((link, i) => (
        <li className="flex" key={i}>
          { type === "main" ? mainNavLink(link) : mobileLink(link)}
        </li>
      ))}
    </>
  )
}

NavLinks.propTypes = {
  textColor: PropTypes.oneOf(["white", "black"]),
  type: PropTypes.oneOf(["mobile", "main"]),
}
