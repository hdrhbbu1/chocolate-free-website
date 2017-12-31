import React from 'react'
import Link from 'gatsby-link'
import * as PropTypes from 'prop-types'
import { rhythm } from '../utils/typography'
import SingleArticle from '../components/SingleArticle'
import SideBar from '../components/SideBar'
import getLandingPageModule from '../utils/getLandingPageModule'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class AboutPage extends React.Component {
  render() {
    const articles = this.props.data.allContentfulArticle.edges
    const contentModules = this.props.data.allContentfulLandingPage.edges[0].node.contentModules
    return (
      <div className="grid">
        {contentModules.map((module, i) => getLandingPageModule(module, i))}
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
    allContentfulLandingPage(filter: {
      slug: {eq: "about-page"}
    }){
      edges {
        node {
          contentModules {
            ... on ContentfulLandingPageImage {
              internal {
                type
              }
              image {
                file {
                  url
                }
              }
            } 
            ... on ContentfulLandingPageFeaturedPosts {
              internal {
                type
              }
               posts {
                title
                slug
                featureImage {
                  file {
                    url
                  }
                }
              }
            } 
          }        
        }
      }
    }
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
