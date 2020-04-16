import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";

import { getTopTxtProps } from "./diplayUtils";

const TopLeftScroller = ({ show, dispatch }) => {
  const scrollTopLeft = useCallback(() => {
    const { left, scrollAmount } = getTopTxtProps();

    if (!left || !scrollAmount) return;
    if (left >= 0) return;

    if (left + scrollAmount > 0) {
      dispatch((prev) => prev - left * -1);
    } else {
      dispatch((prev) => prev - scrollAmount);
    }
  }, [dispatch]);

  return (
    <button
      type="button"
      onClick={scrollTopLeft}
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
  dispatch: PropTypes.func.isRequired,
};

export default TopLeftScroller;
