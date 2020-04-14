import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";

const Display = ({ result, history }) => {
  return (
    <div id="display" className="c-display">
      <button
        type="button"
        className="c-display__top-scroller-left c-btn c-btn--scroller isHidden"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <div className="c-display__top">
        <span className="c-display__top-txt">{history}</span>
      </div>
      <button
        type="button"
        className="c-display__top-scroller-right c-btn c-btn--scroller isHidden"
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <button
        type="button"
        className="c-display__bottom-scroller-left c-btn c-btn--scroller isHidden"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <div className="c-display__bottom">
        <span className="c-display__bottom-txt">{result}</span>
      </div>
      <button
        type="button"
        className="c-display__bottom-scroller-right c-btn c-btn--scroller isHidden"
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string.isRequired,
  history: PropTypes.string.isRequired,
};

export default Display;
