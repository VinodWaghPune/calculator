
import "./App.css";
import Displayscreen from "./components/Displayscreen";
import Button from "./components/Button";
import {  useState } from "react";
import { CalculatorContext } from "./CalculatorContext";
import ResponsiveUI from "./components/ResponsiveUI";

function App() {
  const [displayText, setDisplayText] = useState("0");
  const flag = true;

  const updateDisplay=(val)=>{

    
    setDisplayText(val)


  }


  

  return (
    <div>
    {flag ? (
    <div className=" bg-gradient-to-b from-blue-400 to-orange-400 flex justify-start items-center h-screen flex-col">
      
      <CalculatorContext.Provider value={{displayText,updateDisplay}}>
      <div className="border-2 border-black h-max w-max bg-green-300 m-2 p-2">
        <Displayscreen />
        <div className="grid grid-cols-4 gap-2">
          <Button param="1" /> 
          <Button param="2" />
          <Button param="3" />
          <Button param="+" />
          <Button param="4" />
          <Button param="5" />
          <Button param="6" />
          <Button param="-" />
          <Button param="7" />
          <Button param="8" />
          <Button param="9" />
          <Button param="*" />
          <Button param="0" />
          <Button param="=" />
          <Button param="Clear" />
          <Button param="/" />
        </div>
        
      </div>
      </CalculatorContext.Provider>
      
    <div className="bg-yellow-300 mx-auto "> <p className="font-semibold">Tech Stack </p>
    <p> Use State hook , event handling , and math library</p>
   <p>GIT URL -   <a href="https://github.com/VinodWaghPune/calculator" target="_blank" rel="noopener noreferrer">https://github.com/VinodWaghPune/calculator</a>  </p> 
    
    <p> <a href="https://simple-reactjsx-calculator.netlify.app/">https://simple-reactjsx-calculator.netlify.app/</a></p>
    </div>


    </div>):
    
    (<div><ResponsiveUI/></div>)
}
    </div>
    
  );
}

export default App;
