import React from 'react'
import ArticleHeader from './ArticleHeader'
import Link from 'gatsby-link'

const Article = ({ node }) => {
  return (
      <li>
				<div className="c-article c-card u-marginBottomLarge">
          <ArticleHeader node={node} />
          { node.featureImage &&
            node.featureImage.responsiveResolution.src &&
            <img
              style={{ margin: 0 }}
              width={node.featureImage.responsiveResolution.width}
              height={node.featureImage.responsiveResolution.height}
              src={node.featureImage.responsiveResolution.src}
              srcSet={node.featureImage.responsiveResolution.srcSet}
            />
          }
          <div dangerouslySetInnerHTML={{ __html: node.content.childMarkdownRemark.excerpt }}/>

					<Link rel="noopener" to={`/article/${node.slug}.html`}>Read more...</Link>
				</div>
			</li>
  )
}

export default Article
