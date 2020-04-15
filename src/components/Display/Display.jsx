/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";

import TopLeftScroller from "./TopLeftScroller";
import TopRightScroller from "./TopRightScroller";
import BottomLeftScroller from "./BottomLeftScroller";
import BottomRightScroller from "./BottomRightScroller";

const jsClasses = {
  top: "js-displayTop",
  topTxt: "js-displayTopTxt",
  bottom: "js-displayBottom",
  bottomTxt: "js-displayBottomTxt",
};

const checkOverflow = (displayElem, txtElem, tolerance) => {
  if (!displayElem || !txtElem) return false;
  return (txtElem.offsetWidth / displayElem.offsetWidth) * 100 >= tolerance;
};

const getTopOverflow = (tolerance = 95) => {
  const displayElem = document.querySelector(`.${jsClasses.top}`);
  const txtElem = document.querySelector(`.${jsClasses.topTxt}`);

  return checkOverflow(displayElem, txtElem, tolerance);
};

const getBottomOverflow = (tolerance = 95) => {
  const displayElem = document.querySelector(`.${jsClasses.bottom}`);
  const txtElem = document.querySelector(`.${jsClasses.bottomTxt}`);

  return checkOverflow(displayElem, txtElem, tolerance);
};

const Display = ({ top, bottom }) => {
  const [hasTopOverflow, setHasTopOverflow] = useState(false);
  const [hasBottomOverflow, setHasBottomOverflow] = useState(false);

  useLayoutEffect(() => {
    setHasTopOverflow(getTopOverflow());
    setHasBottomOverflow(getBottomOverflow());
  });

  return (
    <div id="display" className="c-display">
      <TopLeftScroller show={hasTopOverflow} />
      <div className={`c-display__top ${jsClasses.top}`}>
        <div className={`c-display__top-txt ${jsClasses.topTxt}`}>{top}</div>
      </div>
      <TopRightScroller show={hasTopOverflow} />
      <BottomLeftScroller show={hasBottomOverflow} />
      <div className={`c-display__bottom ${jsClasses.bottom}`}>
        <div className={`c-display__bottom-txt ${jsClasses.bottomTxt}`}>
          {bottom}
        </div>
      </div>
      <BottomRightScroller show={hasBottomOverflow} />
    </div>
  );
};

Display.propTypes = {
  top: PropTypes.string.isRequired,
  bottom: PropTypes.string.isRequired,
};

export default Display;
