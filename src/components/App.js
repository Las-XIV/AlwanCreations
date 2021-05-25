import NavBar from './NavBar'
import Footer from './Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import NewsPaper from './NewsPaper'
import About from './About'
import Contact from './Contact'
import FAQ from './FAQ'
function App() {
    return (
      <div className="App">
          <NavBar/>
          <Router >
              <Switch>
                  <Route path='/home'>
                    <Home />
                  </Route>
                  <Route path='/products'>
                    <Products />
                  </Route>
                  <Route path='/news-paper'>
                    <NewsPaper />
                  </Route>
                  <Route path='/about-us'>
                    <About />
                  </Route>
                  <Route path='/contact-us'>
                    <Contact />
                  </Route>
                  <Route path='/FAQ'>
                    <FAQ />
                  </Route>
              </Switch>
          </Router>
          <Footer />
      </div>
    );
  }
  
export default App;
  