import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <h1>Services</h1>
    <p>Welcome to Services</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Services
