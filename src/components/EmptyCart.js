// just putting the code for this here for now until I put it on the checkout page which I've not built yet

<button
style={buttonStyles}
onClick={event => this.runEmptyCart(event)}
disabled={!this.props.cart.length}
>
Empty basket
</button>


// this needs to go where the state is

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