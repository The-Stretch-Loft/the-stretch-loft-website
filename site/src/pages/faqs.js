import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FAQS = () => (
  <Layout>
    <SEO title="FAQS" />
    <h1>FAQS</h1>
    <p>Welcome to FAQS</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FAQS
