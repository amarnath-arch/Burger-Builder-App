import Layout from './components/layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {Route} from 'react-router-dom';
import Orders from './containers/Orders/Orders';


function App() {
  return (
    <div >
      <Layout>
         <Route path='/' exact component={BurgerBuilder} />
         <Route path='/Orders' component={Orders} />
         <Route path='/Checkout'  component={Checkout} />
      </Layout>
    </div>
  );
}

export default App;
