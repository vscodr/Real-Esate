import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Explore from './pages/Explore'; 
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Explore />}></Route>
        <Route path='/offers' element={<Offers />}></Route>
        <Route path='/profile' element={<Signin />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/forgot-password' element={<ForgotPassword />}></Route>
      </Routes>
      <Navbar />
    </Router>
      
    </>
  );
}

export default App;
