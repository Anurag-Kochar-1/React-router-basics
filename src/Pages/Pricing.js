import React from 'react'
import "../App.css"
import Tier from '../Components/Tier'

function Pricing() {
  return (
    <div className='pricingPage'>
    

      <Tier title = "Bronze Tier" />
      <Tier title = "Silver Tier" />
      <Tier title = "Gold Tier" />
    </div>
  )
}

export default Pricing