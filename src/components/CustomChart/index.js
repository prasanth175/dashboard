import React, {useState} from 'react'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'
import './index.css'

const CustomLineChart = ({data}) => {
  const [selectedMonth, setSelectedMonth] = useState(data[0].month)

  const handleMonthChange = event => {
    setSelectedMonth(event.target.value)
  }

  const selectedData = data.find(item => item.month === selectedMonth)

  return (
    <div className="line-chart">
      <div className="activity-txt">
        <h2 className="activity-heading">Activities</h2>
        <select
          className="activity-dropdown"
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          {data.map(item => (
            <option key={item.month} value={item.month}>
              {item.month}
            </option>
          ))}
        </select>
      </div>
      <LineChart
        className="activity-chart"
        width={800}
        height={250}
        data={selectedData.weeks}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="users" stroke="#8884d8" name="Users" />
        <Line type="monotone" dataKey="guests" stroke="#82ca9d" name="Guests" />
      </LineChart>
    </div>
  )
}

export default CustomLineChart
