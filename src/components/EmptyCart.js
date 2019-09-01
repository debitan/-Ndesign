// just putting the code for this here for now until I put it on the checkout page which I've not built yet

<button
style={buttonStyles}
onClick={event => this.runEmptyCart(event)}
disabled={!this.props.cart.length}
>
Empty basket
</button>