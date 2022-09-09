
import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for DIPInput
import DIPInputRoot from "components/DIPInput/DIPInputRoot";

const DIPInput = forwardRef(({ error, success, disabled, ...rest }, ref) => (
  <DIPInputRoot {...rest} ref={ref} ownerState={{ error, success, disabled }} />
));

// Setting default values for the props of DIPInput
DIPInput.defaultProps = {
  error: false,
  success: false,
  disabled: false,
};

// Typechecking props for the DIPInput
DIPInput.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default DIPInput;
