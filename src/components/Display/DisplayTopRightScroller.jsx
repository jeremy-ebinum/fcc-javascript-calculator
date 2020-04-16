import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";

import { getTopTxtProps } from "./diplayUtils";

const TopRightScroller = ({ show, dispatch }) => {
  const scrollTopRight = useCallback(() => {
    const { right, scrollAmount } = getTopTxtProps();

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
      onClick={scrollTopRight}
      className={`c-display__top-scroller-right c-btn c-btn--scroller ${
        !show && "isHidden"
      }`}
    >
      <FontAwesomeIcon icon={faAngleRight} />
    </button>
  );
};

TopRightScroller.propTypes = {
  show: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default TopRightScroller;
