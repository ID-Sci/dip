
import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for DIPSocialButton
import DIPSocialButtonRoot from "components/DIPSocialButton/DIPSocialButtonRoot";

const DIPSocialButton = forwardRef(({ color, size, iconOnly, circular, children, ...rest }, ref) => (
  <DIPSocialButtonRoot
    {...rest}
    ref={ref}
    variant="contained"
    color="primary"
    size={size}
    ownerState={{ color, size, iconOnly, circular }}
  >
    {children}
  </DIPSocialButtonRoot>
));

// Setting default values for the props of DIPSocialButton
DIPSocialButton.defaultProps = {
  size: "medium",
  color: "facebook",
  iconOnly: false,
  circular: false,
};

// Typechecking props for the DIPSocialButton
DIPSocialButton.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf([
    "facebook",
    "twitter",
    "instagram",
    "linkedin",
    "pinterest",
    "youtube",
    "github",
    "vimeo",
    "slack",
    "dribbble",
    "reddit",
    "tumblr",
  ]),
  iconOnly: PropTypes.bool,
  circular: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default DIPSocialButton;
