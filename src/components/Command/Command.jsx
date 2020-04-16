import React from "react";
import PropTypes from "prop-types";

const buttonClasses = {
  operator: "c-btn c-btn--alt",
  clear: "c-btn c-btn--alt",
  equals: "c-btn c-btn--alt",
  default: "c-btn",
};

const containerClasses = {
  default: "c-operations__cmd",
  AC: "c-operations__cmd isClear",
  "=": "c-operations__cmd isEquals",
  "0": "c-operations__cmd isZero",
};

const Command = ({ command, handleCommand }) => {
  return (
    <div
      className={containerClasses[command.value] || containerClasses.default}
    >
      <button
        id={command.id}
        type="button"
        onClick={() => handleCommand(command)}
        className={buttonClasses[command.type] || buttonClasses.default}
      >
        {command.value}
      </button>
    </div>
  );
};

Command.propTypes = {
  command: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  handleCommand: PropTypes.func.isRequired,
};

export default Command;
