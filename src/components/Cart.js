import React from 'react'

import Basket from './Basket'

const Cart = class extends React.Component {
  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, {
          addToCart: this.props.addToCart.bind(this),
          cart: this.props.cart,
        })}
      </div>
    )
  }
}

export default Cart