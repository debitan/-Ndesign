/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Navbar from "./Navbar"
import "./Ndesign-layout.css"

class Layout extends React.Component {
  state = {
    cart: [],
  }

  componentDidMount() {
    // Get existing cart from localstorage if present.
    const existingCart = JSON.parse(
      localStorage.getItem('stripe_checkout_items')
    )
    if (existingCart && existingCart.length) {
      this.setState({ cart: existingCart })
    }
  }

  getCart() {
    return this.state.cart
  }

  addToCart(newItem) {
    console.log(newItem)
    let itemExisted = false
    let updatedCart = this.state.cart.map(item => {
      if (newItem.id === item.sku.id) {
        itemExisted = true
        return { sku: item.sku, quantity: ++item.quantity }
      } else {
        return item
      }
    })
    if (!itemExisted) {
      updatedCart = [...updatedCart, { sku: newItem, quantity: 1 }]
    }
    this.setState({ cart: updatedCart })
    // Store the cart in the localStorage.
    let stripeUpdatedCart = updatedCart.map(item => {
      return { sku: item.sku.id, quantity: item.quantity }
    })
    localStorage.setItem('stripe_checkout_items', JSON.stringify(stripeUpdatedCart))
  }

  emptyCart = () => {
    // take a copy of current cart
    let emptyCart = {...this.state.cart}
    // clear the copy
    emptyCart = []
    // set state with copy
    this.setState({ cart : emptyCart })
    // clear the localStorage also
    localStorage.removeItem('stripe_checkout_items')
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, child => React.cloneElement(child, {
      addToCart: this.addToCart.bind(this),
      cart: this.state.cart,
      getCart: this.getCart,
      emptyCart: this.emptyCart
    }))
  return (
    <>
      <Navbar siteTitle="±Ndesign" cart={this.state.cart} getCart={this.getCart} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>
          {childrenWithProps}
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> by Noinu Ltd
        </footer>
      </div>
    </>
  )
}
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout
