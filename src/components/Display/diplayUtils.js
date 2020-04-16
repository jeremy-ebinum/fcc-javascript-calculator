export const jsClasses = {
  top: "js-displayTop",
  topTxt: "js-displayTopTxt",
  bottom: "js-displayBottom",
  bottomTxt: "js-displayBottomTxt",
};

export const checkOverflow = (displayElem, txtElem, tolerance) => {
  if (!displayElem || !txtElem) return false;
  return (txtElem.offsetWidth / displayElem.offsetWidth) * 100 >= tolerance;
};

export const getTopOverflow = (tolerance = 95) => {
  const displayElem = document.querySelector(`.${jsClasses.top}`);
  const txtElem = document.querySelector(`.${jsClasses.topTxt}`);

  return checkOverflow(displayElem, txtElem, tolerance);
};

export const getBottomOverflow = (tolerance = 95) => {
  const displayElem = document.querySelector(`.${jsClasses.bottom}`);
  const txtElem = document.querySelector(`.${jsClasses.bottomTxt}`);

  return checkOverflow(displayElem, txtElem, tolerance);
};

export const getBottomTxtProps = () => {
  const displayElem = document.querySelector(`.${jsClasses.bottom}`);
  const txtElem = document.querySelector(`.${jsClasses.bottomTxt}`);

  if (!displayElem || !txtElem) return {};

  const displayCoords = displayElem.getBoundingClientRect();
  const txtCoords = txtElem.getBoundingClientRect();

  const { fontSize, letterSpacing } = window.getComputedStyle(txtElem);
  const scrollAmount = parseInt(fontSize, 10) + parseInt(letterSpacing, 10);

  return {
    top: txtCoords.top - displayCoords.top,
    right: txtCoords.right - displayCoords.right,
    bottom: txtCoords.bottom - displayCoords.bottom,
    left: txtCoords.left - displayCoords.left,
    scrollAmount,
  };
};

export const getTopTxtProps = () => {
  const displayElem = document.querySelector(`.${jsClasses.top}`);
  const txtElem = document.querySelector(`.${jsClasses.topTxt}`);

  if (!displayElem || !txtElem) return {};

  const displayCoords = displayElem.getBoundingClientRect();
  const txtCoords = txtElem.getBoundingClientRect();

  const { fontSize, letterSpacing } = window.getComputedStyle(txtElem);
  const scrollAmount = parseInt(fontSize, 10) + parseInt(letterSpacing, 10);

  return {
    top: txtCoords.top - displayCoords.top,
    right: txtCoords.right - displayCoords.right,
    bottom: txtCoords.bottom - displayCoords.bottom,
    left: txtCoords.left - displayCoords.left,
    scrollAmount,
  };
};
