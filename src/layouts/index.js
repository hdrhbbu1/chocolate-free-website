import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import styles from '../styles/main.scss'
import { rhythm } from "../utils/typography"

const propTypes = {
  children: PropTypes.func.isRequired,
}
const Header = () => {
  return (
    <header id="masthead" className="site-header" role="banner">
      <div className="socialnav">
        <p>
          <a href="https://www.facebook.com/chocolatefreedotcom/" rel="noopener" target="blank" className="facebook">Facebook</a>
          <span/>
          <a href="https://www.instagram.com/amalnasri/" rel="noopener" target="blank" className="instagram">Instagram</a>
          <span/>
          <a href="https://www.pinterest.com/chocolate_free/" target="blank" rel="noopener" className="pinterest">Pinterest</a>
        </p>
      </div>

      <div className="logo">
        <Link to="/"><img className="c-header__logo" src="/assets/chocolate_free_logo.png" alt="Chocolate Free"/></Link>
      </div>

      <nav className="c-nav">
        <ul className="c-nav__list"> 
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about.html">About</Link></li>
          <li><Link to="/hors-sujet.html">Hors sujet</Link></li>
        </ul>
      </nav>
    </header>
  )
}
class DefaultLayout extends React.Component {
  render() {
    return (
      <main className="l-container">
        <Header />
        {this.props.children()}
      </main>
    )
  }
}

DefaultLayout.propTypes = propTypes

export default DefaultLayout
