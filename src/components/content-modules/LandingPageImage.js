import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

class LandingPageImage extends Component {
  render () {
    const {
      data
    } = this.props
    console.log(data)
    return (
      <div className="header content-module">
      <Link to="/" rel="noopener">
        <img className="logo" src={data.image.file.url} alt="Chocolate Free"/>
      </Link>
      </div>
    )
  }
}

LandingPageImage.propTypes = {
  data: PropTypes.object.isRequired
}

export default LandingPageImage