import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
class PostCard extends Component {
  render () {
    console.log(this.props.post)
    const {
      title,
      featureImage,
      slug,
      category
    } = this.props.post
    return (
      <article className='post-card'>
        <img src={`${featureImage.file.url}?w=320&h=400`} width='320' height='400' alt=''/>
        <Link to ={`article/${slug}.html`} > <h3>{title}</h3> </Link>
      </article>
    )
  }
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostCard