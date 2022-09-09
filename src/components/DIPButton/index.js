 

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for DIPButton
import DIPButtonRoot from "components/DIPButton/DIPButtonRoot";

const DIPButton = forwardRef(
  ({ color, variant, size, circular, iconOnly, children, ...rest }, ref) => (
    <DIPButtonRoot
      {...rest}
      ref={ref}
      color="primary"
      variant={variant === "gradient" ? "contained" : variant}
      size={size}
      ownerState={{ color, variant, size, circular, iconOnly }}
    >
      {children}
    </DIPButtonRoot>
  )
);

// Setting default values for the props of DIPButton
DIPButton.defaultProps = {
  size: "medium",
  variant: "contained",
  color: "white",
  circular: false,
  iconOnly: false,
};

// Typechecking props for the DIPButton
DIPButton.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["text", "contained", "outlined", "gradient"]),
  color: PropTypes.oneOf([
    "default",
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  circular: PropTypes.bool,
  iconOnly: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default DIPButton;
