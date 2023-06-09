import React, { useState } from 'react';
import './DashboardCssfiles/DashboardHeader.css';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiUserCircle } from 'react-icons/bi';
import searchBar from '../../images/Search bar.png';
import { toast } from 'react-hot-toast';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase-config';
import { useNavigate } from 'react-router-dom';

const DashboardHeader = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const logoutUser = async () => {
    try {
      await signOut(auth);
      toast.success('Logout Successfully');
      navigate('/');
    } catch (error) {
      console.log('error: ', error);
      toast.error('Error occured in logout, Try Again!');
    }
  };
  return (
    <div className='dashboard-header'>
      <div className='dashboard-title'>Dashboard</div>
      <div className='dashboard-menu'>
        <h1>
          <img src={searchBar} alt='search here' />
        </h1>
        <h1>
          <IoMdNotificationsOutline size={25} />
        </h1>
        <h1
          onClick={() => setShowMenu(!showMenu)}
          style={{ position: 'relative' }}
        >
          <BiUserCircle size={25} />
          <div
            className='logout-div'
            style={{
              display: `${showMenu ? 'flex' : 'none'}`,
              position: 'absolute',
              top: '1.25rem',
              right: '0.5rem',
            }}
          >
            <button
              className='logout-btn'
              style={{
                border: '1px solid black',
                backgroundColor: 'white',
                padding: '0 0.5rem',
                zIndex: 1,
                borderRadius: '10px',
                fontWeight: 'bold',
              }}
              onClick={logoutUser}
            >
              Logout
            </button>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default DashboardHeader;
