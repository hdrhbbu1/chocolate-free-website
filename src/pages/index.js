import React from 'react'
import Link from 'gatsby-link'
import * as PropTypes from 'prop-types'
import { rhythm } from '../utils/typography'
import ArticleHeader from '../components/ArticleHeader'

const propTypes = {
  data: PropTypes.object.isRequired,
}
const Article = ({ node }) => {
  return (
    <li>
      <div className="c-article c-card u-marginBottomLarge">
        <ArticleHeader node={node} />
        <img
          src={`${node.featureImage.file.url}?w=800`}
        />
        <p>{node.content.childMarkdownRemark.excerpt}</p>
        <Link rel='noopener' to={`/article/${node.slug}.html`}>Read more...</Link>
      </div>
    </li>
  )
}

class IndexPage extends React.Component {
  render() {
    const articles = this.props.data.allContentfulArticle.edges
    return (
      <ul className="c-paddedList">
        {articles.map(({ node }, i) => node.section === 'Recipes' && <Article node={node} key={i} />)}
      </ul>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    allContentfulArticle(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          title
          slug
          section
          publishDate
          content {
            childMarkdownRemark {
              excerpt
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
