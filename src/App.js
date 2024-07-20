import "./App.css";
import ButtonConatainer from "./component/buttonConatainer";
import InputContainer from "./component/inputContainer";
import { useState } from "react";
import OutputContainer from "./component/outputContainer";
import ErrorComponent from "./component/errorComponent";

function App() {
  //main output data
  const [output, setOutput] = useState(" ");
  //number - 1
  const [input1, setInput1] = useState("");
  //number - 2
  const [input2, setInput2] = useState("");

  //method  for collecting value from input
  const inputHandel1 = (e) => {
    setInput1(e.target.value);
  };

  const inputHandel2 = (e) => {
    setInput2(e.target.value);
  };

  //method for evalution of input data and set into main variable

  const evaluteVal = (item) => {
    if (input1 === "" || isNaN(input1) || input2 === "" || isNaN(input2)) {
      setOutput("error");
      return;
    }

    let value;
    switch (item) {
      case "+":
        value = Number(input1) + Number(input2);
        break;
      case "-":
        value = Number(input1) - Number(input2);
        break;
      case "*":
        value = Number(input1) * Number(input2);
        break;
      case "/":
        if (Number(input2) === 0) {
          setOutput("error");
          return;
        }
        value = Number(input1) / Number(input2);
        break;
      default:
        setOutput("error");
        return;
    }

    setOutput(value);

    setInput1("");
    setInput2("");
  };

  return (
    <div className="mainContainer">
      <h1>React Calculator</h1>

      {/*input component passing value and method through state*/}
      <InputContainer
        inputHandel1={inputHandel1}
        inputHandel2={inputHandel2}
        input1={input1}
        input2={input2}
      ></InputContainer>

      {/*button component  passing method through state*/}
      <ButtonConatainer evaluteVal={evaluteVal}></ButtonConatainer>


      {/*handeling output with the help of conditional rendering of two component */}
      {output === " " ? (
        <h1>Input should be valid</h1>
      ) : output === "error" ? (
        <ErrorComponent></ErrorComponent>
      ) : (
        <OutputContainer output={output}></OutputContainer>
      )}
    </div>
  );
}

export default App;
