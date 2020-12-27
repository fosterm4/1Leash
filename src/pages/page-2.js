import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EmailList from "../components/email-list"
import Product from "../components/product"
import ContactForm from "../components/contact-form"

const SecondPage = () => (
  <Layout>
    
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Product/>
    <ContactForm/>
  </Layout>
)

export default SecondPage
