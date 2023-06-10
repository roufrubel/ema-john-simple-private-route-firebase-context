import { 
  BrowserRouter as Router, 
  Routes, 
  Route
 } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './OrderReview/OrderReview';
import Inventory from './Inventory/Inventory';
import NotFound from './NotFound/NotFound';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoutes from './components/PrivateRoute/PrivateRoutes';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Shipping from './components/Shipping/Shipping';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header></Header>
        <Routes>
        <Route exact path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/review" element={<OrderReview />} />
        <Route element={<PrivateRoutes />}>
              <Route path="/inventory" element={<Inventory />} />
        </Route>
        <Route element={<PrivateRoutes />}>
              <Route path="/placeorder" element={<PlaceOrder />} />
        </Route>
        <Route element={<PrivateRoutes />}>
              <Route path="/shipping" element={<Shipping />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
