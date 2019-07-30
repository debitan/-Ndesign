const Basket = class extends React.Component {
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
        successUrl: `http://localhost:8000/payment-success/`,
        cancelUrl: `http://localhost:8000/`,
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
          />
        </React.Fragment>
      )
    }
  }

  export default Basket


  // this is a placeholder file so I don't loose the code to redirect to the stripe checkout while I build the basket page