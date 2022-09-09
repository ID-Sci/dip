
import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";


import DIPTypography from "components/DIPTypography";

// Custom styles for DIPProgress
import DIPProgressRoot from "components/DIPProgress/DIPProgressRoot";

const DIPProgress = forwardRef(({ variant, color, value, label, ...rest }, ref) => (
  <>
    {label && (
      <DIPTypography variant="button" fontWeight="medium" color="text">
        {value}%
      </DIPTypography>
    )}
    <DIPProgressRoot
      {...rest}
      ref={ref}
      variant="determinate"
      value={value}
      ownerState={{ color, value, variant }}
    />
  </>
));

// Setting default values for the props of DIPProgress
DIPProgress.defaultProps = {
  variant: "contained",
  color: "info",
  value: 0,
  label: false,
};

// Typechecking props for the DIPProgress
DIPProgress.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
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
  value: PropTypes.number,
  label: PropTypes.bool,
};

export default DIPProgress;
