/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useLayoutEffect } from "react";

import PropTypes from "prop-types";

import { jsClasses, getTopOverflow, getBottomOverflow } from "./diplayUtils";

import TopLeftScroller from "./DisplayTopLeftScroller";
import TopRightScroller from "./DisplayTopRightScroller";
import BottomLeftScroller from "./DisplayBottomLeftScroller";
import BottomRightScroller from "./DisplayBottomRightScroller";

const Display = ({ top, bottom }) => {
  const [hasTopOverflow, setHasTopOverflow] = useState(false);
  const [hasBottomOverflow, setHasBottomOverflow] = useState(false);
  const [topTxtRightPos, setTopTxtRightPos] = useState(0);
  const [bottomTxtRightPos, setBottomTxtRightPos] = useState(0);

  useLayoutEffect(() => {
    setHasTopOverflow(getTopOverflow());
    setHasBottomOverflow(getBottomOverflow());
  });

  return (
    <div className="c-display">
      <TopLeftScroller show={hasTopOverflow} dispatch={setTopTxtRightPos} />
      <div className={`c-display__top ${jsClasses.top}`}>
        <div
          style={{ right: topTxtRightPos }}
          className={`c-display__top-txt ${jsClasses.topTxt}`}
        >
          {top}
        </div>
      </div>
      <TopRightScroller show={hasTopOverflow} dispatch={setTopTxtRightPos} />
      <BottomLeftScroller
        show={hasBottomOverflow}
        dispatch={setBottomTxtRightPos}
      />
      <div className={`c-display__bottom ${jsClasses.bottom}`}>
        <div
          id="display"
          style={{ right: bottomTxtRightPos }}
          className={`c-display__bottom-txt ${jsClasses.bottomTxt}`}
        >
          {bottom}
        </div>
      </div>
      <BottomRightScroller
        show={hasBottomOverflow}
        dispatch={setBottomTxtRightPos}
      />
    </div>
  );
};

Display.propTypes = {
  top: PropTypes.string.isRequired,
  bottom: PropTypes.string.isRequired,
};

export default Display;
