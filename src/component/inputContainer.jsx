import React from "react";

function inputContainer({ inputHandel1, inputHandel2, input1, input2 }) {
  return (
    <div className="inputContainer">
      <input
        type="text"
        placeholder="Num - 1"
        value={input1}
        onChange={(e) => inputHandel1(e)}
      ></input>
      <input
        type="text"
        placeholder="Num - 2"
        value={input2}
        onChange={(e) => inputHandel2(e)}
      ></input>
    </div>
  );
}

export default inputContainer;
