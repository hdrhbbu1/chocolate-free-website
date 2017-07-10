import React from 'react'

const Author = ({author})=> {
    return (
      <div className="c-article__authorSumUp">
        <div className="c-article__author">
          <div className="c-article__authorImage c-article__authorImage--large">
          { author.avatar &&
            author.avatar.responsiveResolution.src &&
            <img
              style={{ margin: 0 }}
              width={author.avatar.responsiveResolution.width}
              height={author.avatar.responsiveResolution.height}
              src={author.avatar.responsiveResolution.src}
              srcSet={author.avatar.responsiveResolution.srcSet}
            />
           }
          </div>
          <div>
            <span className="c-article__authorName">{ author.fullName }</span>
            <p>{ author.bio.bio }</p>
            <div className="u-noMarginBottom" data-markup><a href={ author.website }>Website</a></div>
          </div>
        </div>
      </div>
    )
  }

export default Author
