import {BsFillTagsFill} from 'react-icons/bs'
import {TbCalendarTime} from 'react-icons/tb'
import {BiUserCircle} from 'react-icons/bi'
import {FiSettings} from 'react-icons/fi'
import {LuPieChart} from 'react-icons/lu'
import {GoogleLogout} from 'react-google-login'
import {useNavigate} from 'react-router-dom'

import './index.css'

const clientId =
  '75030971780-pjohi0mlucn3u0snvbit9jfgrbplnra4.apps.googleusercontent.com'

const Dashboard = () => {
  const navigate = useNavigate()

  const OnSuccess = () => {
    console.log('log out successfull!')
    navigate('/login')
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Board.</h1>
      <div className="dashboard-list">
        <div className="dashboard-item">
          <LuPieChart className="dashboard-img" />
          <p className="dashboard-item-txt">Dashboard</p>
        </div>
        <div className="dashboard-item">
          <BsFillTagsFill className="dashboard-img" />
          <p className="dashboard-item-txt">Transactions</p>
        </div>
        <div className="dashboard-item">
          <TbCalendarTime className="dashboard-img" />
          <p className="dashboard-item-txt">Schedules</p>
        </div>
        <div className="dashboard-item">
          <BiUserCircle className="dashboard-img" />
          <p className="dashboard-item-txt">Users</p>
        </div>
        <div className="dashboard-item">
          <FiSettings className="dashboard-img" />
          <p className="dashboard-item-txt">Settings</p>
        </div>
      </div>
      <div className="dashboard-footer">
        <p className="footer-item">Help</p>
        <p className="footer-item">Contact Us</p>
        <div>
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={OnSuccess}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
