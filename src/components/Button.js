import React, { useContext} from 'react'
import { CalculatorContext } from '../CalculatorContext'
import { create,all } from 'mathjs'

function Button({param}) {
    const {displayText,updateDisplay} = useContext(CalculatorContext)
    const math = create(all)
  
    



    const handleClick=(e)=>{

       //todo
       console.log('param'+param)
       console.log(typeof displayText);
       console.log('display' + displayText)
      

       if(param ==='+' || param ==='-' || param==='*' || param==='/')
       {
        if(['*','+','-','/','='].includes(displayText.slice(-1)) ) 
        {
            console.log('skipping')
            

        }
        else{
            operatorValue(displayText+param);

            
        }
        
       }
       else if(param === '='){
        evaluate();
        
       }
       else if(param ==='Clear')
       {
        inputValue('');
        
       }
       else{
        inputValue(displayText+param)
        
       }
       
       
      
       
      

    }

    const inputValue=(val)=>{
        
        console.log(displayText, val)
        updateDisplay(val)

    }
    const operatorValue=(val)=>{
        updateDisplay(val)
  
    }
    const evaluate=()=>{
       // const num = eval(displayText)
        //Remove leading zeros from display text
        // const expression = displayText.replace(/^0+(?=\d)/, '');
        // const result = Function('"use strict";return (' + displayText + ')')();
        // updateDisplay(result)

        updateDisplay(math.evaluate(displayText)+'')
      
    }

    
  return (
    <button className='border-2 border-black text-xl p-4'  onClick={handleClick} >{param}</button>
  )
}

export default Button