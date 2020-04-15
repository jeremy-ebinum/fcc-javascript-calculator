import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";

const BottomRightScroller = ({ show }) => {
  return (
    <button
      type="button"
      className={`c-display__bottom-scroller-right c-btn c-btn--scroller ${
        !show && "isHidden"
      }`}
    >
      <FontAwesomeIcon icon={faAngleRight} />
    </button>
  );
};

BottomRightScroller.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default BottomRightScroller;
