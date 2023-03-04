import { Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import Home from './Components/Home/Home';
import RegisterSeller from './Components/Registration/Seller';
import Admin from './Components/Admin';
import Seller from './Components/Seller';
import Carpenter from './Components/Carpenter';
import Customer from './Components/Customer';
import Products from './Components/Products';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Reg from './Components/Reg/Reg'


function App() {


  return (
    <>
    
    

          
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/register' element={<RegisterSeller/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/seller' element={<Seller/>}/>
            <Route path='/carpenter' element={<Carpenter/>}/>
            <Route path='/customer' element={<Customer/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/reg' element={<Reg/>}/>
          </Routes>
          
    </>
  );
}



export default App;
