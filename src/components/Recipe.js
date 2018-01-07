import React, { Component} from 'react';

class Recipe extends Component {
  render() {
    return (
      <section className='recipe'>
        <h2 className='title'>Recipe Title</h2>
        <div className='prep'>
          <div className='prep-section prep-time'>
            <span className='label'>PREP TIME</span>
            <span className='value'>10 mins</span>
          </div>
          <div className='prep-section cook-time'>
            <span className='label'>COOK Time</span>
            <span className='value'>10 mins</span>
          </div>
          <div className='prep-section total-time'>
            <span className='label'>TOTAL Time</span>
            <span className='value'>10 mins</span>
          </div>
        </div>
        <div className='ingredients'>
          <h2>INGREDIENTS</h2>
          <ul>
            <li>bla bla bla</li>
            <li>bla bla bla</li>
            <li>bla bla bla</li>
            <li>bla bla bla</li>
          </ul>
        </div>
        <div className='instructions'>
          <h2>INSTRUCTIONS</h2>
          <p>
            
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          </p>
        </div>
      </section>  
    )
  }
}

export default Recipe;
