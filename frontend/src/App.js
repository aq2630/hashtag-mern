import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import PlaceOrder from './screens/PlaceOrder'
import OrderDetailsScreen from './screens/OrderDetailsScreen'
import LoginScreen from './screens/LoginScreen'
import AdminPanel from './screens/AdminPanel'
import SingleOrder from './screens/SingleOrder'
import productCheckOut from './screens/ProductCheckOut'


const App = () => {
  return (
    <Router>
      <Header  />
      
           <Route exact path='/' component={HomeScreen} />         
      <main className='py-5'>
        <Container>          
           <Route exact path='/adminpanel' component={AdminPanel} />         
           <Route exact path='/vieworder/:id' component={SingleOrder} />         
           <Route exact path='/products/:productname' component={productCheckOut} />         
           <Route exact path='/login' component={LoginScreen} />         
           <Route exact path='/orders/:id' component={OrderDetailsScreen} />         
           <Route exact path='/placeorder' component={PlaceOrder} />         
           <Route path='/cart/:id?' component={CartScreen} />         
           <Route path='/product/:id' component={ProductScreen} />         
        </Container>       
      </main>
      <Footer />
    </Router>
  );
}

export default App;
