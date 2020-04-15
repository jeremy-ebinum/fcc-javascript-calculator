import React, { useState, useCallback } from "react";

import "./App.scss";

import commands from "../../data/commands";
import { isOnlyZero, hasNoDecimals } from "../../utils";
import Display from "../Display/Display";
import Command from "../Command/Command";

const App = () => {
  const [currentVal, setCurrentVal] = useState("0");
  const [memory, setMemory] = useState("");

  const handleDecimal = useCallback(
    ({ text }) => {
      if (isOnlyZero(currentVal)) setCurrentVal((prev) => prev + text);
      if (!isOnlyZero(currentVal) && hasNoDecimals(currentVal)) {
        setCurrentVal((prev) => prev + text);
      }
    },
    [currentVal]
  );

  const handleOperands = useCallback(
    ({ text }) => {
      if (isOnlyZero(currentVal)) {
        setCurrentVal(text);
      } else {
        setCurrentVal((prev) => prev + text);
      }
    },
    [currentVal]
  );

  const handleOperators = useCallback(({ text }) => {
    console.log(text);
  }, []);

  const handleEquals = useCallback(({ text }) => {
    console.log(text);
  }, []);

  const handleClear = useCallback(() => {
    setCurrentVal("0");
    setMemory("");
  }, []);

  const handleCommands = useCallback(
    (command) => {
      switch (command.type) {
        case "operand":
          handleOperands(command);
          break;
        case "decimal":
          handleDecimal(command);
          break;
        case "operator":
          handleOperators(command);
          break;
        case "equals":
          handleEquals(command);
          break;
        case "clear":
          handleClear(command);
          break;
        default:
          break;
      }
    },
    [handleClear, handleDecimal, handleEquals, handleOperands, handleOperators]
  );

  return (
    <div className="o-container">
      <div className="c-calculator">
        <Display top={memory} bottom={currentVal} />

        <div className="c-operations">
          {commands.map((cmd) => (
            <Command
              key={cmd.id}
              command={cmd}
              handleCommand={handleCommands}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
