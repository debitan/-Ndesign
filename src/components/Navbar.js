import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import BasketButton from './BasketButton'
// import instagram from '../images/instagram.svg'

class Navbar extends React.Component {
  render() {
    return(
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
      margin: `0 auto`,
      maxWidth: 960,
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gridGap: '10px',
      gridTemplateRows: 'minmax(30px, 70px)',
      placeItems: 'center',
      padding: '0em 0.4em',
      position: 'sticky',
      top: '0',
      zIndex: '1',
    }}
  >
      <h1>
        <Link
          to="/"
          style={{
            color: `rgb(56, 38, 40)`,
            textDecoration: `none`,
            borderStyle: 'ridge',
            padding: '0.1em',
            marginLeft: '0.5em',
            gridColumn: '1',
          }}
        >
          {this.props.siteTitle}
        </Link>
      </h1>
      {/* <div
        style={{
          gridColumn: '5',
          width: '3rem',
          height: '3rem',
        }}
      >
        <Link
          href="/"
        >
          <img src={instagram} alt="" style={{          width: '3rem',
          height: '3rem',}}/>
        </Link>
      </div> */}
      <div
        style={{
          gridColumn: '6',
          gridRow: '1',
          width: '3rem',
          height: '3rem',
          marginRight: '0.5em',
        }}
      >
        <BasketButton cart={this.props.cart}/>
      </div>
  </header>
)
      }}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
