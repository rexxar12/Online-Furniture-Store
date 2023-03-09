import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../reduxStore/actions';


const Seller = () => {
    //logout logic
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
      const hist=window.history.state;
      window.history.replaceState(hist,"","/");
      dispatch(logout());
      navigate('/');
    };
    
  
  return (
    <div>
      <h2>Seller Component</h2>
      <p>Seller homepage</p>
      <button onClick={handleLogout}>Logout</button>
      <a href='/seller/add-product'>
        Add Product
      </a>
    </div>
  );
}

export default Seller;