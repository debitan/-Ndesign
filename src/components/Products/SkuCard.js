import React from "react"
import Img from 'gatsby-image'
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
    const {title, sku, body, price, image} = this.props
    return (
      <div style={cardStyles}>
        <Img style={{ width: '100%'}} fluid={image} />
        <h4>{title}</h4>
        <p>{body}</p>
        <p>¥{price}</p>
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