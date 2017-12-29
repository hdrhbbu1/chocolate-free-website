import React, { Component } from 'react'
import * as PropTypes from 'prop-types'

class ArticleImage extends Component {
  
  render () {
    // TODO: add tracer effect to the image ?
    <section>
      <img src={this.props.data.image.url} />
    </section>
  }
}

ArticleImage.propTypes = {
  data: PropTypes.object.isRequired
}
export default ArticleImage
