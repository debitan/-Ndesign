import React from 'react'
import emptyShoppingBasket from '../images/empty-shopping-basket.svg'
import fullShoppingBasket from '../images/full-shopping-basket.svg'
import { Link } from 'gatsby'


// const quantityOfItems = basket => {
//   let quantity = 0
//   Object.entries(basket).forEach(
//     ([key, value]) => quantity += value.quantity
//   )
//   return quantity
// }

const BasketButton = class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link to='/basket'>
          <img
            src={!this.props.cart.length ? emptyShoppingBasket : fullShoppingBasket}
            alt='Basket button'
          />
        </Link>
      </React.Fragment>
    )
  }
}

export default BasketButton