import React, { Component} from 'react';
import Link from 'gatsby-link'
import InstaFeed from './insta-feed'

class SideBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <div className="search widget">
          <h3 className='widget-title'>Looking for something?</h3>
          <form role='search' className='search-form'>
            <div className='searchbox'>
              <input type="search" defaultValue='SEARCH'/>
            </div>
          </form>
        </div>
        <div className="widget widget-text">
          <h3 className='widget-title'> Meet Amal</h3>
          <Link to='/about'>
            <img src='http://images.contentful.com/0w6gaytm0wfv/2q5y0JFFcYseCSEcGke2Cy/b3515912ff2e6e3140fc5c475a72899f/Vacation_please_don_t_go_____________________italy__follow__follow4follow__likeforlike__like4like__likes__holidays__summervi.jpg?w=230' width='230' alt='Amal Nasri'/>
          </Link>
        </div>
        <div className='widget widget-text'>
          <h3 className='widget-title'>NEVER MISS A POST!</h3>
          <div id="mc_embed_signup">
            <form action="https://chocolate-free.us17.list-manage.com/subscribe/post?u=a98782a9b211f2e039434108c&amp;id=a6247b2b13" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
              <div id="mc_embed_signup_scroll">
                <div className="mc-field-group">
                  <input type="email" defaultValue="ENTER YOUR EMAIL" name="EMAIL" className="required email" id="mce-EMAIL" />
                </div>
                <div className="mc-field-group">
                  <input type="text" defaultValue="ENTER YOUR NAME" name="FNAME" className="" id="mce-FNAME" />
                </div>
                <div id="mce-responses" className="clear">
                  <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                  <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                </div>
                <div style={{position: 'absolute', left: '-5000px', ariaHidden:'true'}}><input type="text" name="b_a98782a9b211f2e039434108c_a6247b2b13" tabIndex="-1" value="" /></div>
                  <div className="clear">
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                  </div>
                </div>
            </form>
          </div>
        </div>
        <div className="widget widget-text">
          <h3 className='widget-title'> Instagram Feed</h3>
          <InstaFeed />
        </div>
      </div>
    )
  }
}

export default SideBar;
