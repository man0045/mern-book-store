import React from 'react'
import PieChart from './PieChart'
import BookWeights from './BookWeights'
import BarGraph from './BarGraph'
import DashBoardPromo from './DashBoardPromo'



const UpperDashBoard = () => {
  return (
    <div>
      <DashBoardPromo/>
      <PieChart />
      <BookWeights/>
      <BarGraph/>
    </div>

    
    
  )
}

export default UpperDashBoard
