import { Route, Routes } from 'react-router-dom';
import './App.css';
import Button from 'react-bootstrap/Button';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import Payment from './pages/Payment';
import Login  from './pages/Login';
import Register  from './pages/Register';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";




const initialOptions = {
  "client-id": "AUfN4SvHoZWfp-29ysTFS1OM9BNy-PpTI6Yzh3fwnpWsljhJCnigjxLcnHB2QKyCY86ReLuTDsoOTGYl",
  currency: "IND",
  intent: "capture",
};

function App() {


  return (
    <div className="App">
  <PayPalScriptProvider options={initialOptions}>
  <Routes>

<Route path='/' element={<LandingPage/>} />
<Route path='home' element={<Home/>} />
<Route path='admin' element={<Admin/>} />
<Route path='profile' element={<Profile/>} />
<Route path='payment/:id' element={<Payment/>} />
<Route path='login' element={<Login/>} />
<Route path='register' element={<Register/>} />



</Routes>
</PayPalScriptProvider>
    </div>
  );
}

export default App;
