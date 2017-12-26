import React from 'react'
import Link from 'gatsby-link'
import * as PropTypes from 'prop-types'
import { rhythm } from '../utils/typography'
import SingleArticle from '../components/SingleArticle'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class AboutPage extends React.Component {
  render() {
    const articles = this.props.data.allContentfulArticle.edges
    return (
      <div className="content">
        {articles.map(({ node }, i) => node.section === 'about' && <SingleArticle  node={node} key={i} />)}
      </div>
    )
  }
}

AboutPage.propTypes = propTypes

export default AboutPage

export const pageQuery = graphql`
  query AboutPageQuery {
    allContentfulArticle(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          title
          slug
          section
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
