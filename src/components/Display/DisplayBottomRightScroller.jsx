import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";

import { getBottomTxtProps } from "./diplayUtils";

const BottomRightScroller = ({ show, dispatch }) => {
  const scrollBottomRight = useCallback(() => {
    const { right, scrollAmount } = getBottomTxtProps();

    if (!right || !scrollAmount) return;
    if (right <= 0) return;

    if (right - scrollAmount < 0) {
      dispatch(0);
    } else {
      dispatch((prev) => prev + scrollAmount);
    }
  }, [dispatch]);

  return (
    <button
      type="button"
      onClick={scrollBottomRight}
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
  dispatch: PropTypes.func.isRequired,
};

export default BottomRightScroller;
