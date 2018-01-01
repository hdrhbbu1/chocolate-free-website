import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
class PostCard extends Component {
  render () {
    const {
      title,
      featureImage,
      slug,
      contentModules,
      category
    } = this.props.post
    console.log(contentModules)

    return (
      <article className='post-card'>
        <img src={`${featureImage.file.url}?w=320&h=400`} width='320' height='400' alt=''/>
        <h3><Link to ={`article/${slug}.html`} >{title}</Link></h3>
        <div className='content' dangerouslySetInnerHTML={{ __html: contentModules[0].copy.childMarkdownRemark.excerpt }}/>
      </article>
    )
  }
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostCard