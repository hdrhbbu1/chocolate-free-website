import React from 'react'
import Link from 'gatsby-link'
import * as PropTypes from "prop-types"
import ArticleHeader from '../components/ArticleHeader'
import { rhythm } from '../utils/typography'
import DisqusThread from '../components/DisqusThread'
import Author from '../components/Author'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ArticleTemplate extends React.Component {
  render() {
    const article = this.props.data.contentfulArticle
    const {
      title,
      slug,
      content,
      featureImage,
      author,
      publishDate,
      section
    } = article
    console.log(content)
    return (
      <article className="c-article">
        <ArticleHeader node={article} />
        <div dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}/>
        <Author author={author} />
        <DisqusThread id={slug} path={slug} title={title}/>
      </article>
    )
  }
}

ArticleTemplate.propTypes = propTypes

export default ArticleTemplate

export const pageQuery = graphql`
  query articleQuery($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      title
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
      publishDate
      featureImage {
        responsiveResolution(width: 800) {
          src
          srcSet
          height
          width
        }
      }
      author {
        fullName
        website
        bio {
          bio
        }
        avatar {
          responsiveResolution(width: 200) {
            src
            srcSet
            height
            width
          }
        }
      }
    }
  }
`
