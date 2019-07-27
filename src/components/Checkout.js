import React from 'react'
import buttonStyles from '../styles/buttonStyles'


const quantityOfItems = cart => {
  let quantity = 0
  Object.entries(cart).forEach(
    ([key, value]) => quantity += value.quantity
  )
  return quantity
}

const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe('pk_test_hJ3fbHvbQZFxyrbtjNnBrU4k00A6Mx6jvD', {
      betas: ['checkout_beta_4'],
    })
  }

  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: this.props.cart,
      successUrl: `http://localhost:8000/page-2/`,
      cancelUrl: `http://localhost:8000/advanced/`,
    })

    if (error) {
      console.error('Error:', error)
    }
  }

  runEmptyCart(event) {
    event.preventDefault()
    this.props.emptyCart()
  }

  render() {
    return (
      <React.Fragment>
        <button
          style={buttonStyles}
          onClick={event => this.redirectToCheckout(event)}
          disabled={!this.props.cart.length}
        >
          {this.props.cart.length ? `CHECKOUT - ${quantityOfItems(this.props.cart)} ITEMS` : 'CART IS EMPTY'}
        </button>
        <button
          style={buttonStyles}
          onClick={event => this.runEmptyCart(event)}
          disabled={!this.props.cart.length}
        >
          EMPTY CART
        </button>
      </React.Fragment>
    )
  }
}

export default Checkout