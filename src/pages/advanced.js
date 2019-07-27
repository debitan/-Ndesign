import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Cart from '../components/Cart'
import Skus from "../components/Products/Skus"

class AdvancedExamplePage extends React.Component{
  render() {
    return(
  <Layout>
    <SEO title="Advanced Example" />
    <h1>ストア</h1>
    <Cart>
        <Skus />
    </Cart>
    <Link to="/">Go back to the home page</Link>
  </Layout>
    )
    }
}

export default AdvancedExamplePage