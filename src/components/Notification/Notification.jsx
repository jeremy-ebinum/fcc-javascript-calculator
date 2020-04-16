import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const alertTypes = {
  error: "c-alert c-alert--error",
  info: "c-alert c-alert--info",
};

let timerId;

const Notification = ({ notification }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);

    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      setShow(false);
    }, notification.timeout || 3000);
  }, [notification]);

  if (!notification.message) return null;

  const baseClass = alertTypes[notification.type] || "c-alert";

  return (
    <div className={show ? baseClass : `${baseClass} isHidden`}>
      <span>{notification.message}</span>
    </div>
  );
};

Notification.propTypes = {
  notification: PropTypes.shape({
    message: PropTypes.string,
    type: PropTypes.string,
    timeout: PropTypes.number,
  }).isRequired,
};

export default Notification;
