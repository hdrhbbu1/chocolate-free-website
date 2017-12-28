import React from 'react'
import Link from 'gatsby-link'
import * as PropTypes from 'prop-types'
import { rhythm } from '../utils/typography'
import Article from '../components/Article'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class HorsSujetPage extends React.Component {
  render() {
    const articles = this.props.data.allContentfulArticle.edges
    return (
      <ul className="c-paddedList">
        {articles.map(({ node }, i) => <Article node={node} key={i} />)}
      </ul>
    )
  }
}

HorsSujetPage.propTypes = propTypes

export default HorsSujetPage

export const pageQuery = graphql`
  query HorsSujetPageQuery {
    allContentfulArticle(filter: {
        node_locale: {eq: "en-US"},
        section: {eq:"horsSujet"}
    }) {
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
