import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Jumbotron from "../components/Jumbotron"
import JumbotronTextOnly from "../components/JumbotronTextOnly"
import Skus from "../components/Products/Skus"

class AdvancedExamplePage extends React.Component{
  render() {
    return(
  <Layout>
    <SEO title="±Ndesign store" />
    <Jumbotron flowers={this.props.data.flowersImage.childImageSharp.fluid} />
    <JumbotronTextOnly />
    <Skus />
  </Layout>
    )
    }
}

export default AdvancedExamplePage

export const pageQuery = graphql`
query {
    flowersImage: file(relativePath: { eq: "flowers.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

