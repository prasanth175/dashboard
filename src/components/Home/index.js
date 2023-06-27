import './index.css'
import Dashboard from '../Dashboard'
import Cards from '../Cards'

const Home = ({profileObj}) => {
  return (
    <div className="home-container">
      <Dashboard projectObj={profileObj} />
      <Cards />
    </div>
  )
}

export default Home
