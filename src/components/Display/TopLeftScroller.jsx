import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";

const TopLeftScroller = ({ show }) => {
  return (
    <button
      type="button"
      className={`c-display__top-scroller-left c-btn c-btn--scroller ${
        !show && "isHidden"
      }`}
    >
      <FontAwesomeIcon icon={faAngleLeft} />
    </button>
  );
};

TopLeftScroller.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default TopLeftScroller;
