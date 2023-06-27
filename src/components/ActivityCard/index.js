import React from 'react'
import CustomLineChart from '../CustomChart'
import './index.css'

const ActivityCard = () => {
  const activities = [
    {
      month: 'January',
      weeks: [
        {week: 1, users: 250, guests: 100},
        {week: 2, users: 300, guests: 120},
        {week: 3, users: 280, guests: 90},
        {week: 4, users: 320, guests: 110},
      ],
    },
    {
      month: 'February',
      weeks: [
        {week: 1, users: 260, guests: 110},
        {week: 2, users: 310, guests: 130},
        {week: 3, users: 290, guests: 100},
        {week: 4, users: 330, guests: 120},
      ],
    },
    {
      month: 'March',
      weeks: [
        {week: 1, users: 270, guests: 120},
        {week: 2, users: 320, guests: 140},
        {week: 3, users: 300, guests: 110},
        {week: 4, users: 340, guests: 130},
      ],
    },
    {
      month: 'April',
      weeks: [
        {week: 1, users: 280, guests: 130},
        {week: 2, users: 330, guests: 150},
        {week: 3, users: 310, guests: 120},
        {week: 4, users: 350, guests: 140},
      ],
    },
    {
      month: 'May',
      weeks: [
        {week: 1, users: 290, guests: 140},
        {week: 2, users: 340, guests: 160},
        {week: 3, users: 320, guests: 130},
        {week: 4, users: 360, guests: 150},
      ],
    },
    {
      month: 'June',
      weeks: [
        {week: 1, users: 300, guests: 150},
        {week: 2, users: 350, guests: 170},
        {week: 3, users: 330, guests: 140},
        {week: 4, users: 370, guests: 160},
      ],
    },
    {
      month: 'July',
      weeks: [
        {week: 1, users: 310, guests: 160},
        {week: 2, users: 360, guests: 180},
        {week: 3, users: 340, guests: 150},
        {week: 4, users: 380, guests: 170},
      ],
    },
    {
      month: 'August',
      weeks: [
        {week: 1, users: 320, guests: 170},
        {week: 2, users: 370, guests: 190},
        {week: 3, users: 350, guests: 160},
        {week: 4, users: 390, guests: 180},
      ],
    },
    {
      month: 'September',
      weeks: [
        {week: 1, users: 330, guests: 180},
        {week: 2, users: 380, guests: 200},
        {week: 3, users: 360, guests: 170},
        {week: 4, users: 400, guests: 190},
      ],
    },
    {
      month: 'October',
      weeks: [
        {week: 1, users: 340, guests: 190},
        {week: 2, users: 390, guests: 210},
        {week: 3, users: 370, guests: 180},
        {week: 4, users: 410, guests: 200},
      ],
    },
    {
      month: 'November',
      weeks: [
        {week: 1, users: 350, guests: 200},
        {week: 2, users: 400, guests: 220},
        {week: 3, users: 380, guests: 190},
        {week: 4, users: 420, guests: 210},
      ],
    },
    {
      month: 'December',
      weeks: [
        {week: 1, users: 360, guests: 210},
        {week: 2, users: 410, guests: 230},
        {week: 3, users: 390, guests: 200},
        {week: 4, users: 430, guests: 220},
      ],
    },
  ]

  return (
    <div className="App">
      <CustomLineChart data={activities} />
    </div>
  )
}

export default ActivityCard
