import React from 'react'
import emptyShoppingBasket from '../images/empty-shopping-basket.svg'
import fullShoppingBasket from '../images/full-shopping-basket.svg'


// const quantityOfItems = basket => {
//   let quantity = 0
//   Object.entries(basket).forEach(
//     ([key, value]) => quantity += value.quantity
//   )
//   return quantity
// }

const BasketButton = class extends React.Component {
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
        <img
          src={!this.props.cart.length ? emptyShoppingBasket : fullShoppingBasket}
          onClick={event => this.redirectToCheckout(event)}
          alt="Basket button"
        />
      </React.Fragment>
    )
  }
}

export default BasketButton