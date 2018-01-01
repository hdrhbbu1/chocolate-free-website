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
    <div className='navigation'>
        <nav className="main-navigation menu" role="navigation">
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/hors-sujet.html'>Hors Sujet</Link>
              </li>
              </ul>
        </nav>
        <nav className="social-navigation menu" role="navigation">
          <ul>
            <li><a href='https://www.facebook.com/chocolatefreedotcom/' target="_blank" rel='noopener'> <img src='/icons/facebook.svg' width='15' height='15' alt='facebook' /></a></li>
            <li><a href='https://www.instagram.com/chocolatefreeblog' target="_blank" rel='noopener'> <img src='/icons/instagram.svg' width='15' height='15' alt='instagram' /></a></li>
            <li><a href='https://www.youtube.com/channel/UCAx4forqSrkq2smhZ-X5oSg' target="_blank" rel='noopener'> <img src='/icons/youtube.svg' width='15' height='15' alt='youtube' /></a></li>
          </ul>
        </nav>
      </div>
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
