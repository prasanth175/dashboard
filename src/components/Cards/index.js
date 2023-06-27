import './index.css'
// import Cookies from 'js-cookie';
import Navbar from '../Navbar'
import TotalCards from '../TotalCards'
import ActivityCard from '../ActivityCard'
import TopProducts from '../TopProducts'
import Schedule from '../Schedule'

const Cards = ({profileObj}) => {
  return (
    <div className="cards-container">
      <Navbar projectObj={profileObj} />
      <TotalCards />
      <ActivityCard />
      <div className="bottom-container">
        <TopProducts />
        <Schedule />
      </div>
    </div>
  )
}

export default Cards
