import './index.css'

const Schedule = () => {
  const schedules = [
    {
      work: 'Meeting',
      time: '9:00 AM - 10:00 AM',
      location: 'Conference Room A',
      color: '#9BDD7C',
    },
    {
      work: 'Lunch',
      time: '12:00 PM - 1:00 PM',
      location: 'Cafeteria',
      color: '#6972C3',
    },
  ]

  return (
    <div className="schedule">
      <h2 className="schedule-heading">Today's Schedule</h2>
      {schedules.map((schedule, index) => (
        <div
          className="schedule-item"
          key={index}
          style={{borderColor: schedule.color}}
        >
          <p className="work">Work: {schedule.work}</p>
          <p className="time">Time: {schedule.time}</p>
          <p className="location">Location: {schedule.location}</p>
        </div>
      ))}
    </div>
  )
}

export default Schedule
