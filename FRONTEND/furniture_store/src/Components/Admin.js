import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from './reduxStore/actions';
import axios from 'axios';
import { useState,useEffect } from 'react';

const Admin = () => {

  //logout logic
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    
    const hist=window.history.state;
    window.history.replaceState(hist,"","/");
    dispatch(logout());
    navigate('/');
    
  };

  const [sellers, setSellers] = useState([]);
    const [status, setStatus] = useState(0);
    
    useEffect(() => {
        getSellersByStatus(status);
    }, [status]);
    
    const getSellersByStatus = (status) => {
        axios.get(`http://localhost:8080/api/sellers/status/${status}`)
            .then(res => {
                setSellers(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };
    
    const approveSeller = (sid) => {
        axios.post(`http://localhost:8080/api/sellers/approve/${sid}`)
            .then(res => {
                setStatus(0);
            })
            .catch(err => {
                console.log(err);
            });
    };
    
    const rejectSeller = (sid) => {
        axios.post(`http://localhost:8080/api/sellers/reject/${sid}`)
            .then(res => {
                setStatus(0);
            })
            .catch(err => {
                console.log(err);
            });
    };

  return (
    <div>
      <h2>Admin Component</h2>
      <p>Admin homepage</p>
      <button onClick={handleLogout}>Logout</button>
      <br></br>
      <br></br>
      <br></br>
      <div>
            <h1>Admin Dashboard</h1>
            <button onClick={() => setStatus(0)}>Pending</button>
            <button onClick={() => setStatus(1)}>Approved</button>
            
<table>
<thead>
<tr>
<th>Store Name</th>
<th>Email</th>
<th>Contact Number</th>
<th>Address</th>
<th>GST Number</th>
<th>Action</th>
</tr>
</thead>
<tbody>
{sellers.map(seller => (
<tr key={seller.sid}>
<td>{seller.sname}</td>
<td>{seller.email}</td>
<td>{seller.contact}</td>
<td>{seller.address}</td>
<td>{seller.gstno}</td>
<td>
{seller.status === 0 && (
<>
<button onClick={() => approveSeller(seller.sid)}>Approve</button>
<button onClick={() => rejectSeller(seller.sid)}>Reject</button>
</>
)}
{seller.status === 1 && (
<span>Approved</span>
)}
</td>
</tr>
))}
</tbody>
</table>
</div>
    </div>
  );
};

export default Admin;
