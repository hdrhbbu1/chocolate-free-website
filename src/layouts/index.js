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
      <nav id="site-navigation" className="main-navigation" role="navigation">
          <ul>
            <li id="menu-item-17099" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-17099">
              <Link to='/'>Home</Link>
            </li>
            <li id="menu-item-17105" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-17105">
            <Link to='/about'>About</Link>
            </li>
            <li id="menu-item-17106" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-17106">
            <a href="#">Recipes</a>
            </li>
            </ul>
      </nav>
  )
}
class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main> 
          {this.props.children()}
        </main>
      </div>
    )
  }
}

DefaultLayout.propTypes = propTypes

export default DefaultLayout
