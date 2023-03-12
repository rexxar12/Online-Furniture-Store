import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody, MDBContainer, MDBCard } from 'mdb-react-ui-kit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../reduxStore/actions';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Navbar from './Navigation/Navigation'
import './style.css'
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
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            });
    };
    
    const rejectSeller = (sid) => {
        axios.post(`http://localhost:8080/api/sellers/reject/${sid}`)
            .then(res => {
                setStatus(0);
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            });
    };

  return (
    <div>

<Navbar/>
    <MDBContainer>
        <h1 className='heading mt-5 mb-5'>Admin Dashboard</h1>
    <MDBCard>
    <MDBTable>
      <MDBTableHead>
        <tr className='ms-5'>
          <th scope='col'><p>Store Name</p></th>
          <th scope='col'><p>Contact Number</p></th>
          <th scope='col'><p>GST Number</p></th>
          <th scope='col'><p>Status</p></th>
          <th scope='col'><p className='actions'>Actions</p></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {sellers.map(seller => (
        <>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
            <i className="fa-solid fa-circle-user fa-3x"></i>
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{seller.sname}</p>
                <p className='text-muted mb-0'>{seller.email}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{seller.contact}</p>
          </td>
          <td>{seller.gstno}</td>
          <td>
            <MDBBadge color='danger' pill>
              Pending
            </MDBBadge>
          </td>
          <td>
            <button color='success' rounded size='sm' onClick={() => approveSeller(seller.sid)} className="btn btn-success ">
              Approve
            </button>
            <button color='danger' rounded size='sm' onClick={() => rejectSeller(seller.sid)} className="btn btn-danger ms-4">
              Reject
            </button>
          </td>
        </tr>
        </>
        ))}
      </MDBTableBody>
    </MDBTable>
    </MDBCard>
    </MDBContainer>

    </div>
  );
};

export default Admin;

{/* <div>
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
</div>  */}


    