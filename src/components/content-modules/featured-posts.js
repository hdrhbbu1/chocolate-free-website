import React, { Component } from 'react'
import PostCard from '../post-card'
import PropTypes from 'prop-types'

class FeaturedPosts extends Component {
  render () {
    const {
      data
    } = this.props
    return (
      <div className="featured-posts" >
          <h1> Featured Posts </h1>
          <section className='posts' >
            {data.posts.map((post, i) => <PostCard post={post} key={i}/>)}
          </section>
      </div>
    )
  }
}

FeaturedPosts.propTypes = {
  data: PropTypes.object.isRequired
}
export default FeaturedPosts