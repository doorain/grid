import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/*<div id="grid-content">
          <div className="one">1</div>
          <div className="two">2</div>
          <div className="three">3</div>
          <div className="four nested">
            <p>A</p>
            <p>B</p>
            <p>C</p>
            <p>D</p>
          </div>
          <div className="five">5</div>
          <div className="six">6</div>

        </div>*/}
        <input type="checkbox" />
        <div id="grid-content">
          <div id="grid">
            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>

          </div>
          <header>Header</header>
          <main>Main</main>
          <section>Section</section>
          <aside>Aside</aside>
          <nav>Nav</nav>
          <footer>Footer</footer>



        </div>


      </div>
    );
  }
}

export default App;
