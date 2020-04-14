import React from "react";
import PropTypes from "prop-types";

const buttonClasses = {
  operand: "c-btn",
  operator: "c-btn c-btn--alt",
  clear: "c-btn c-btn--alt",
  decimal: "c-btn c-btn--alt",
  equals: "c-btn c-btn--alt",
};

const containerClasses = {
  default: "c-operations__cmd",
  AC: "c-operations__cmd isClear",
  "=": "c-operations__cmd isEquals",
  "0": "c-operations__cmd isZero",
};

const Command = ({ command }) => {
  return (
    <div className={containerClasses[command.text] || containerClasses.default}>
      <button
        id={command.id}
        type="button"
        className={buttonClasses[command.type]}
      >
        {command.text}
      </button>
    </div>
  );
};

Command.propTypes = {
  command: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default Command;
