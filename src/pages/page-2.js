import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Product from "../components/product"
import ContactForm from "../components/contact-form"

const SecondPage = () => (
  <Layout>
    
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Product price="69" productName="Cupcake" description="blah blah blah" url="69.com" images="https://i.imgur.com/t7DTziH.jpg"/>
    <ContactForm/>
  </Layout>
)

export default SecondPage
