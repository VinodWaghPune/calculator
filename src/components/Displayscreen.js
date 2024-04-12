import React from 'react'
import { useContext } from 'react'
import { CalculatorContext } from '../CalculatorContext'

function Displayscreen() {

const {displayText} = useContext(CalculatorContext)


  return (
    <div className=' border-black border-2 h-16 mb-4 text-2xl text-right' >
       {displayText}
    </div>
  )
}

export default Displayscreen    