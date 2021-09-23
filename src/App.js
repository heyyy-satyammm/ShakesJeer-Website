import logo from './logo.svg';
import './App.css';
import'./sem.css';

function App() {
  return (
    <div className="App">
      <div id="main-container" className="main-container nav-effect-1">
      <div className="main clearfix">
      <div className="page-container">
      <section id="book_list">
      <div className="grid-shuffle">
          <ul id="grid" className="column">
          <li className="book-item small-12 medium-6 columns"  data-color='#370d59'>
              <div className="bk-img">
                <div className="bk-wrapper">
                  <div className="bk-book bk-bookdefault" >
                    <div className="bk-front">
                      <div className="bk-cover"style={{backgroundColor:'#370d59'}} ></div>
                    </div>
                    <div className="bk-left" style={{backgroundColor:'#370d59'}}></div>
                  </div>
                </div>
              </div>
              <div className="item-details">
                <h3 className="book-item_title">IT</h3>
                <a href="#" className="button ">Details</a>
              </div>

              <div className="overlay-details">
                <a href="#" className="close-overlay-btn">Close</a>
                <div className="overlay-desc activated">
                  <div className="container">
                    <div className="button-effect">
                        <h2>Choose Your Semester!</h2>
                        <a className="effect effect-1 " href="#" title="Sem-1">1</a>
                        <a className="effect effect-1" href="#" title="Sem-2">2</a>
                        <a className="effect effect-1" href="#" title="Sem-3">3</a>
                        <a className="effect effect-1" href="#" title="Sem-4">4</a>
                        <a className="effect effect-1" href="#" title="Sem-5">5</a>
                        <a className="effect effect-1" href="#" title="Sem-6">6</a>
                        <a className="effect effect-1" href="#" title="Sem-7">7</a>
                        <a className="effect effect-1" href="#" title="Sem-8">8</a>
                      </div>
                </div>                  
                </div>
                
              </div>
            </li>

            <li className="book-item small-12 medium-6 columns"  data-color='#705e1e'>
              <div className="bk-img">
                <div className="bk-wrapper">
                  <div className="bk-book bk-bookdefault">
                    <div className="bk-front">
                      <div className="bk-cover" style={{backgroundColor:'#444b1b'}}></div>
                    </div>
                    <div className="bk-back"></div>
                    <div className="bk-left" style={{backgroundColor:'#444b1b'}}></div>
                  </div>
                </div>
              </div>
              <div className="item-details">
                <h3 className="book-item_title">ITNS</h3>
                
                <a  className="button ">Details</a>
              </div>

              <div className="overlay-details">
                <a href="#" className="close-overlay-btn">Close</a>
                
                <div className="overlay-desc activated">
                  <div className="container">
                    <div className="button-effect">
                        <h2>Choose Your Semester!</h2>
                        <a className="effect effect-1 " href="#" title="Sem-1">1</a>
                        <a className="effect effect-1" href="#" title="Sem-2">2</a>
                        <a className="effect effect-1" href="#" title="Sem-3">3</a>
                        <a className="effect effect-1" href="#" title="Sem-4">4</a>
                        <a className="effect effect-1" href="#" title="Sem-5">5</a>
                        <a className="effect effect-1" href="#" title="Sem-6">6</a>
                        <a className="effect effect-1" href="#" title="Sem-7">7</a>
                        <a className="effect effect-1" href="#" title="Sem-8">8</a>
                      </div>
                </div>
                </div>
                
              </div>
            </li>
            </ul>
        </div>

      </section>

    </div>

  </div>
 

  <div className="main-overlay" style={{display: 'block'}}><div className="overlay-details">
                <a href="#" className="close-overlay-btn">Close</a>
                
                <div className="overlay-desc activated">
                  <div className="container">
                    <div className="button-effect">
                        <h2>Choose Your Semester!</h2>
                        <a className="effect effect-1 " href="#" title="Sem-1">1</a>
                        <a className="effect effect-1" href="#" title="Sem-2">2</a>
                        <a className="effect effect-1" href="#" title="Sem-3">3</a>
                        <a className="effect effect-1" href="#" title="Sem-4">4</a>
                        <a className="effect effect-1" href="#" title="Sem-5">5</a>
                        <a className="effect effect-1" href="#" title="Sem-6">6</a>
                        <a className="effect effect-1" href="#" title="Sem-7">7</a>
                        <a className="effect effect-1" href="#" title="Sem-8">8</a>
                      </div>
                </div>
                </div>
                
              </div>
    <div className="overlay-full"></div>
  </div>


</div>
    </div>
  );
}

export default App;
