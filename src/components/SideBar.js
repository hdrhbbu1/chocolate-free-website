import React, { Component} from 'react';

class SideBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <div className="search widget">
          <h3>Looking for something</h3>
          <form>
            <input type="search" />
          </form>
        </div>
      </div>
    )
  }
}

export default SideBar;
