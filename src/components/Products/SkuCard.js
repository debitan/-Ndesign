import React from "react"

import buttonStyles from '../../styles/buttonStyles'

const cardStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-start",
  padding: "1rem",
  marginBottom: "1rem",
  boxShadow: "5px 5px 25px 0 rgba(46,61,73,.2)",
  backgroundColor: "#fff",
  borderRadius: "6px",
  maxWidth: "300px",
}

const formatPrice = (amount, currency) => {
  let numberFormat = new Intl.NumberFormat(["ja-JP"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  })
  return numberFormat.format(amount)
}

const SkuCard = class extends React.Component {
    state = {
      disabled: false,
      buttonText: 'Add to cart',
      paymentMessage: '',
    }

    resetButton() {
      this.setState({ disabled: false, buttonText: 'One more please!' })
    }

    addToCart(event, sku, quantity = 1) {
      event.preventDefault()
      this.setState({ disabled: true, buttonText: 'Adding...' })
      this.props.addToCart(sku)
      setTimeout(this.resetButton.bind(this), 500)
    }

  render() {
    const sku = this.props.sku
    return (
      <div style={cardStyles}>
        <img style={{ maxWidth: "100%" }} src={sku.image} alt={sku.attributes.name}/>
        <h4>{sku.attributes.name}</h4>
        <p>{sku.product.metadata.description}</p>
        <p>Price: {formatPrice(sku.price, sku.currency)}</p>
        <button
          style={buttonStyles}
          onClick={event => this.addToCart(event, sku)}
          disabled={this.state.disabled}
        >
            {this.state.buttonText}
        </button>
        {this.state.paymentMessage}
      </div>
    )
  }
}

export default SkuCard