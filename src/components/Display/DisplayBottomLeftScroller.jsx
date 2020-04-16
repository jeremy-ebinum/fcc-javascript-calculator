import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";

import { getBottomTxtProps } from "./diplayUtils";

const BottomLeftScroller = ({ show, dispatch }) => {
  const scrollBottomLeft = useCallback(() => {
    const { left, scrollAmount } = getBottomTxtProps();

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
      onClick={scrollBottomLeft}
      className={`c-display__bottom-scroller-left c-btn c-btn--scroller ${
        !show && "isHidden"
      }`}
    >
      <FontAwesomeIcon icon={faAngleLeft} />
    </button>
  );
};

BottomLeftScroller.propTypes = {
  show: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default BottomLeftScroller;
