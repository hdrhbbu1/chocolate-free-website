import fetch from 'unfetch'
const url  = 'https://www.instagram.com/chocolatefreeblog/?__a=1'
import React, { Component } from 'react'

class InstaFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {media:[]}
  }
  componentDidMount () {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({media: data.user.media.nodes.filter(mediaNode => mediaNode.is_video === false).slice(0, 9)})
      })
  }
  render () {
    return (
      <div className='insta-feed'>
        {this.state.media.map((mediaElement, i) => <img key={i} src={mediaElement.thumbnail_resources[0].src} />)}
      </div>
    )
  }
}

export default InstaFeed