import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SkuCard from './SkuCard'

const conatinerStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  padding: '1rem 0 1rem 0',
}

export default props => (
      <StaticQuery
      query={graphql`
      query Products {
        skus: allSanityProduct {
          edges {
            node {
              title
              _rawBody
              _rawSlug
              productDetails {
                price
                sku
                images {
                  asset {
                    fluid(maxWidth: 600) {
                      ...GatsbySanityImageFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
      `}
        render={({ skus }) => (
          <div style={conatinerStyles}>
            {skus.edges.map(({ node: sku }) => (
              <SkuCard {...props} key={sku.id}
              sku={sku}
              title={sku.title}
              body={sku._rawBody.jp[0].children[0].text}
              price={sku.productDetails.price}
              image={sku.productDetails.images[0].asset.fluid}
              />
            ))}
          </div>
        )}

      />
)
