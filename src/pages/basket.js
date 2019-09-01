import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BasketPageContainer from '../components/BasketPageContainer'

class BasketPage extends React.Component{
  render() {
    return(
  <Layout>
    <SEO title="±Ndesign store" />
    <BasketPageContainer cart={this.props.cart} emptyCart={this.props.emptyCart}/>
  </Layout>
    )
    }
}

export default BasketPage