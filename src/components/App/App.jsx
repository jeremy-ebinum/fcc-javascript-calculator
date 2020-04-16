import React, { useState, useCallback } from "react";
import safeEval from "safe-eval";

import "./App.scss";

import commands from "../../data/commands";
import {
  hasNoDecimals,
  isZero,
  isOperator,
  isOpertorWithZero,
  isMinus,
  endsWithOperator,
  endsWithOtherOperatorAndMinus,
  replaceLastCharWith,
  getEndingNumber,
  isDivideByZero,
} from "../../utils";

import Notification from "../Notification/Notification";
import Display from "../Display/Display";
import Command from "../Command/Command";

const ZERO = "0";
const DECIMAL = ".";

const initialCalcState = {
  currentVal: ZERO,
  prevVal: ZERO,
  memory: "",
  hasJustEvaluated: false,
};

const initialNotificationState = {
  message: null,
  type: null,
  timeout: 3000,
};

const App = () => {
  const [calcState, setCalcState] = useState(initialCalcState);
  const [notification, setNotification] = useState(initialNotificationState);

  const { currentVal, prevVal, memory, hasJustEvaluated } = calcState;

  const clear = useCallback(() => {
    setCalcState(initialCalcState);
  }, []);

  const handleOperands = useCallback(
    (value) => {
      setCalcState((prev) => ({ ...prev, hasJustEvaluated: false }));

      if (hasJustEvaluated) {
        setCalcState((prev) => ({
          ...prev,
          currentVal: value,
          memory: !isZero(value) ? value : "",
        }));
      } else {
        const determineMemory = () => {
          if (isZero(currentVal) && isZero(value)) {
            return memory === "" ? value : memory;
          }

          if (isZero(memory) || isOpertorWithZero(memory)) {
            return replaceLastCharWith(memory, value);
          }

          return memory + value;
        };

        const determineCurrentVal = () => {
          if (
            isZero(currentVal) ||
            isOperator(currentVal) ||
            isOpertorWithZero(currentVal)
          ) {
            return replaceLastCharWith(currentVal, value);
          }

          return currentVal + value;
        };

        setCalcState((prev) => ({
          ...prev,
          currentVal: determineCurrentVal(),
          memory: determineMemory(),
        }));
      }
    },
    [currentVal, memory, hasJustEvaluated]
  );

  const handleDecimal = useCallback(() => {
    if (hasJustEvaluated) {
      setCalcState((prev) => ({
        ...prev,
        currentVal: ZERO + DECIMAL,
        memory: ZERO + DECIMAL,
        hasJustEvaluated: false,
      }));
    } else if (hasNoDecimals(currentVal)) {
      setCalcState((prev) => ({ ...prev, hasJustEvaluated: false }));
      if (endsWithOperator(memory) || (isZero(currentVal) && memory === "")) {
        setCalcState((prev) => ({
          ...prev,
          currentVal: ZERO + DECIMAL,
          memory: memory + ZERO + DECIMAL,
        }));
      } else {
        setCalcState((prev) => ({
          ...prev,
          currentVal: getEndingNumber(memory) + DECIMAL,
          memory: memory + DECIMAL,
        }));
      }
    }
  }, [currentVal, memory, hasJustEvaluated]);

  const handleOperators = useCallback(
    (value) => {
      setCalcState((prev) => ({
        ...prev,
        currentVal: value,
        hasJustEvaluated: false,
      }));

      if (hasJustEvaluated) {
        setCalcState((prev) => ({ ...prev, memory: prevVal + value }));
      } else if (!endsWithOperator(memory)) {
        setCalcState((prev) => ({
          ...prev,
          prevVal: memory,
          memory: memory + value,
        }));
      } else if (!endsWithOtherOperatorAndMinus(memory)) {
        setCalcState((prev) => ({
          ...prev,
          memory: isMinus(value) ? memory + value : prevVal + value,
        }));
      } else if (value !== "-") {
        setCalcState((prev) => ({
          ...prev,
          memory: prevVal + value,
        }));
      }
    },
    [prevVal, memory, hasJustEvaluated]
  );

  const evaluate = useCallback(() => {
    let formula = memory;
    let result;

    while (endsWithOperator(formula)) {
      formula = replaceLastCharWith(formula, "");
    }

    formula = formula.replace(/x/g, "*");

    if (isDivideByZero(formula)) {
      setNotification((prev) => ({
        ...prev,
        message: "Cannot divide by zero",
        type: "error",
      }));

      clear();
    } else {
      try {
        result = Math.round(10000 * safeEval(formula)) / 10000;
      } catch (e) {
        setNotification((prev) => ({
          ...prev,
          message: "Unsafe operation",
          type: "error",
        }));
        clear();
      }

      setCalcState((prev) => ({
        ...prev,
        currentVal: result.toString(),
        memory: `${memory.replace(/\*/g, "x")}=${result}`,
        prevVal: result,
        hasJustEvaluated: true,
      }));
    }
  }, [memory, clear]);

  const handleCommands = useCallback(
    ({ type, value }) => {
      if (type === "operand") return handleOperands(value);
      if (type === "decimal") return handleDecimal();
      if (type === "operator") return handleOperators(value);
      if (type === "equals") return evaluate();

      return clear();
    },
    [handleOperands, handleDecimal, handleOperators, evaluate, clear]
  );

  return (
    <div className="o-container">
      <div className="c-calculator">
        <Display top={memory} bottom={currentVal} />

        <div className="c-operations">
          {commands.map((command) => (
            <Command
              key={command.id}
              command={command}
              handleCommand={handleCommands}
            />
          ))}
        </div>
      </div>

      <Notification notification={notification} />
    </div>
  );
};

export default App;
