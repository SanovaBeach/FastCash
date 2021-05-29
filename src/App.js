import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GlobalStyle from './globalStyles'

// components
import ScrollToTop from './components/ScrollToTop'
import {Navbar, Footer} from './components'
import Home from './pages/HomePage/Home'
import GetStarted from './pages/GettingStarted/GetStarted'
import Services from './pages/Services/Services'

function App() {
  return (
    <Router>
       <ScrollToTop />
       <GlobalStyle />
       <Navbar />
       <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/getting-started' exact component={GetStarted} />
         <Route path='/services' exact component={Services} />
       </Switch>
       <Footer />
    </Router>
  );
}

export default App;
