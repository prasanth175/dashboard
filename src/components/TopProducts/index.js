import React, {useEffect, useRef} from 'react'
import './index.css'

const data = [
  {name: 'Basic Tees', percentage: '50%', color: '#FF0000'},
  {name: 'Custom Pants', percentage: '10%', color: '#00FF00'},
  {name: 'Super Hoodies', percentage: '40%', color: '#0000FF'},
]

const TopProducts = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    // Convert percentage strings to numbers
    data.forEach(item => {
      item.percentage = parseFloat(item.percentage)
    })

    // Calculate the total percentage
    const totalPercentage = data.reduce((sum, item) => sum + item.percentage, 0)

    // Set the initial angle
    let startAngle = 0

    // Loop through the data to draw the pie chart
    data.forEach(item => {
      // Calculate the slice angle
      const sliceAngle = (2 * Math.PI * item.percentage) / totalPercentage

      // Set the color for the slice
      const color = item.color

      // Draw the slice
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.moveTo(canvas.width / 2, canvas.height / 2)
      ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        canvas.height / 2,
        startAngle,
        startAngle + sliceAngle,
      )
      ctx.closePath()
      ctx.fill()

      // Update the start angle for the next slice
      startAngle += sliceAngle
    })

    // Draw the legend
    ctx.fillStyle = '#000'
    ctx.font = '12px Arial'

    data.forEach((item, index) => {
      const legendX = canvas.width + 25
      const legendY = index * 20 + 20
      const dotX = legendX - 15
      const dotY = legendY - 5
      const dotSize = 10

      ctx.fillStyle = item.color
      ctx.fillRect(dotX, dotY, dotSize, dotSize)
      ctx.fillStyle = '#000'
      ctx.fillText(item.name, legendX, legendY)
      ctx.fillText(item.percentage, legendX + 100, legendY)
    })
  }, [])

  return (
    <div className="pie-chart">
      <canvas ref={canvasRef} width={200} height={200} />
      <div className="pie-values">
        {data.map(item => (
          <p key={item.name}>
            <span
              style={{
                display: 'inline-block',
                width: '10px',
                height: '10px',
                backgroundColor: item.color,
                marginRight: '5px',
              }}
            />
            {item.name}: {item.percentage}
          </p>
        ))}
      </div>
    </div>
  )
}

export default TopProducts
