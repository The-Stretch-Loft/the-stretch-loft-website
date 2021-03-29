import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Team = () => (
  <Layout>
    <SEO title="Meet the Team" />
    <h1>Meet the team</h1>
    <p>Welcome to the team</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Team
