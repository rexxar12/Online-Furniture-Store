import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import RegisterSeller from './Components/Registration/Seller';
import Admin from './Components/Admin';
import Seller from './Components/Seller/Seller';
import Carpenter from './Components/Carpenter';
import Customer from './Components/Customer';
import Products from './Components/Products/Products';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Reg from './Components/Reg/Reg'
import Login from './Components/Login/Login';
import AddProduct from './Components/Seller/AddProductForm'
import {requireAuth} from './utils/Auth'
import './index.css'
import ProductSearch from './Components/Products/ProductSearch';


function App() {

  return (
    <>
    
    

          
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<RegisterSeller/>}/>
            <Route path='/admin' element={<Admin/>} component={requireAuth(Admin)}/>
            <Route path='/seller' element={<Seller/>}/>
            <Route path='/carpenter' element={<Carpenter/>}/>
            <Route path='/customer' element={<Customer/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/product-search' element={<ProductSearch/>}/>
            <Route path='/reg' element={<Reg/>}/>
            <Route path='/seller/add-product' element={<AddProduct/>}/>
            
            
            
          </Routes>
          
    </>
  );
}



export default App;
