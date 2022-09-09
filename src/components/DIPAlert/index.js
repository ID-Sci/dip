
import { useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";


import Fade from "@mui/material/Fade";


import DIPBox from "components/DIPBox";

// Custom styles for the DIPAlert
import DIPAlertRoot from "components/DIPAlert/DIPAlertRoot";
import DIPAlertCloseIcon from "components/DIPAlert/DIPAlertCloseIcon";

function DIPAlert({ color, dismissible, children, ...rest }) {
  const [alertStatus, setAlertStatus] = useState("mount");

  const handleAlertStatus = () => setAlertStatus("fadeOut");

  // The base template for the alert
  const alertTemplate = (mount = true) => (
    <Fade in={mount} timeout={300}>
      <DIPAlertRoot ownerState={{ color }} {...rest}>
        <DIPBox
          display="flex"
          alignItems="center"
          fontSize="1rem"
          fontWeight="regular"
          color={color === "light" ? "dark" : "white"}
        >
          {children}
        </DIPBox>
        {dismissible ? (
          <DIPAlertCloseIcon onClick={mount ? handleAlertStatus : null}>&times;</DIPAlertCloseIcon>
        ) : null}
      </DIPAlertRoot>
    </Fade>
  );

  switch (true) {
    case alertStatus === "mount":
      return alertTemplate();
    case alertStatus === "fadeOut":
      setTimeout(() => setAlertStatus("unmount"), 400);
      return alertTemplate(false);
    default:
      alertTemplate();
      break;
  }

  return null;
}

// Setting default values for the props of DIPAlert
DIPAlert.defaultProps = {
  color: "info",
  dismissible: false,
};

// Typechecking props of the DIPAlert
DIPAlert.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  dismissible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default DIPAlert;
