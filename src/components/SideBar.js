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
              <input type="search" value='SEARCH'/>
            </div>
          </form>
        </div>
        <div className="widget widget-text">
          <h3 className='widget-title'> Meet Amal</h3>
          <Link to='/about'>
            <img src='http://images.contentful.com/0w6gaytm0wfv/2q5y0JFFcYseCSEcGke2Cy/b3515912ff2e6e3140fc5c475a72899f/Vacation_please_don_t_go_____________________italy__follow__follow4follow__likeforlike__like4like__likes__holidays__summervi.jpg?w=230' width='230' alt='Amal Nasri'/>
          </Link>
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
