import React from 'react'
import Link from 'gatsby-link'
import * as PropTypes from 'prop-types'
import { rhythm } from '../utils/typography'
import SingleArticle from '../components/SingleArticle'
import SideBar from '../components/SideBar'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class AboutPage extends React.Component {
  render() {
    const articles = this.props.data.allContentfulArticle.edges
    return (
      <div className="grid">
        <div className="featured-posts" >
          <h1> Featured Posts </h1>
        </div>
        <div className="content">
          {articles.map(({ node }, i) => <SingleArticle node={node} key={i} />)}
        </div>
        <SideBar />
      </div>
    )
  }
}

AboutPage.propTypes = propTypes

export default AboutPage

export const pageQuery = graphql`
  query AboutPageQuery {
    allContentfulArticle(filter: {
      node_locale: { eq: "en-US" },
      section: { eq: "about" }
    }) {
      edges {
        node {
          id
          title
          slug
          publishDate
          contentModules {
            copy {
              childMarkdownRemark {
                html
              }
            }
          }
          featureImage {
            responsiveResolution(width: 800) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
  }
`
