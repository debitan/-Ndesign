import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Jumbotron from "../components/Jumbotron"
import Skus from "../components/Products/Skus"

class IndexPage extends React.Component{
  render() {
    return(
  <Layout>
    <SEO title="±Ndesign store" />
    <Jumbotron flowers={this.props.data.flowersImage.childImageSharp.fluid} />
    <Skus />
  </Layout>
    )
    }
}

export default IndexPage

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

