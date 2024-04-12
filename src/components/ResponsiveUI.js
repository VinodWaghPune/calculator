import React, { useState } from "react";

const ResponsiveUI = () => {
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const calculateResult = () => {
    // try {
    //   const result = eval(expression);
    //   setExpression(result.toString());
    // } catch (error) {
    //   setExpression("Error");
    // }
  };

  const clearExpression = () => {
    setExpression("");
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-gray-200 rounded-lg shadow-lg">
      <div className="mb-4 text-right text-3xl font-bold">{expression}</div>
      <div className="grid grid-cols-4 gap-2">
        <button
          className="col-span-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded"
          onClick={clearExpression}
        >
          AC
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded s"
          onClick={() => handleButtonClick("/")}
        >
          /
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded"
          onClick={() => handleButtonClick("7")}
        >
          7
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded"
          onClick={() => handleButtonClick("8")}
        >
          8
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded"
          onClick={() => handleButtonClick("9")}
        >
          9
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded"
          onClick={() => handleButtonClick("*")}
        >
          *
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded"
          onClick={() => handleButtonClick("4")}
        >
          4
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded"
          onClick={() => handleButtonClick("5")}
        >
          5
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded"
          onClick={() => handleButtonClick("6")}
        >
          6
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded"
          onClick={() => handleButtonClick("-")}
        >
          -
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded"
          onClick={() => handleButtonClick("1")}
        >
          1
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded"
          onClick={() => handleButtonClick("2")}
        >
          2
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded"
          onClick={() => handleButtonClick("3")}
        >
          3
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded"
          onClick={() => handleButtonClick("+")}
        >
          +
        </button>
        <button
          className="col-span-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded"
          onClick={calculateResult}
        >
          =
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded"
          onClick={() => handleButtonClick("0")}
        >
          0
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded"
          onClick={() => handleButtonClick(".")}
        >
          .
        </button>
      </div>
    </div>
  );
};

export default ResponsiveUI;
