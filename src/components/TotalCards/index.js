import './index.css'
import {AiOutlineLike} from 'react-icons/ai'
import {BsTags} from 'react-icons/bs'
// import { HiMiniInboxArrowDown } from "react-icons/hi";
import {PiUsersLight, PiMoneyBold} from 'react-icons/pi'

const data = [
  {
    name: 'Total Users',
    count: 1000,
    image: <PiUsersLight className="total-img" />,
    color: '#DDEFE0',
  },
  {
    name: 'Total Revenue',
    count: 50000,
    image: <PiMoneyBold className="total-img" />,
    color: '#F4ECDD',
  },
  {
    name: 'Likes',
    count: 2500,
    image: <AiOutlineLike className="total-img" />,
    color: '#EFDADA',
  },
  {
    name: 'Transactions',
    count: 1000,
    image: <BsTags className="total-img" />,
    color: '#DDEFE0',
  },
]

const TotalCards = () => {
  return (
    <ul className="total-cards-list">
      {data.map(each => (
        <li
          className="total-cards-item"
          key={each.name}
          style={{backgroundColor: each.color}}
        >
          <div className="total-cards-txt">
            <p className="total-cards-name">{each.name}</p>
            <p className="total-cards-count">{each.count}</p>
          </div>
          {each.image}
        </li>
      ))}
    </ul>
  )
}

export default TotalCards
