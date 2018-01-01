import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import { rhythm } from '../utils/typography'
import ArticleHeader from '../components/ArticleHeader'
import SideBar from '../components/SideBar'
import FeaturedPosts from '../components/content-modules/featured-posts'
import LandingPageImage from '../components/content-modules/LandingPageImage'
import getLandingPageModule from '../utils/getLandingPageModule'

const propTypes = {
  data: PropTypes.object.isRequired,
}

const Article = ({ node }) => {
  return (
    <div className="article">
      <ArticleHeader node={node} />
      {node.featureImage && <img
        src={`${node.featureImage.file.url}?w=800`}
      />}
      <p>{node.contentModules[0].copy.childMarkdownRemark.excerpt}</p>
      <Link rel='noopener' to={`/article/${node.slug}.html`}>Read more...</Link>
    </div>
  )
}

class IndexPage extends React.Component {
  render() {
    const articles = this.props.data.allContentfulArticle.edges
    const contentModules = this.props.data.allContentfulLandingPage.edges[0].node.contentModules
    return (
      <div className="grid">
        {contentModules.map((module, i) => getLandingPageModule(module, i))}
        <div className="content">
          {articles.map(({ node }, i) => <Article node={node} key={i} />)}
        </div>
        <SideBar />
      </div>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    allContentfulLandingPage(filter: {
      slug: {eq: "home-page"}
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
                contentModules {
                  copy {
                    childMarkdownRemark {
                      excerpt
                    }
                  }
                }
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
        node_locale: {eq: "en-US"},
        section: {eq: "Recipes"}
    }, sort:{fields: [publishDate], order: DESC}) {
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
                excerpt
              }
            }
          }
          featureImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`
