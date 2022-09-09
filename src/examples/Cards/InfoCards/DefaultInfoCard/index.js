

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";


import Icon from "@mui/material/Icon";


import DIPBox from "components/DIPBox";
import DIPTypography from "components/DIPTypography";

function DefaultInfoCard({ color, icon, title, description, direction, small }) {
  return (
    <DIPBox lineHeight={1} p={direction === "center" ? 2 : 0} textAlign={direction}>
      {typeof icon === "string" ? (
        <DIPTypography
          display="block"
          variant={direction === "center" ? "h2" : "h3"}
          color={color}
          textGradient
        >
          {" "}
          <Icon>{icon}</Icon>{" "}
        </DIPTypography>
      ) : (
        icon
      )}
      <DIPTypography
        display="block"
        variant="5"
        fontWeight="bold"
        mt={direction === "center" ? 1 : 2}
        mb={1.5}
      >
        {title}
      </DIPTypography>
      <DIPTypography
        display="block"
        variant={small ? "button" : "body2"}
        color="text"
        pr={direction === "left" ? 6 : 0}
        pl={direction === "right" ? 6 : 0}
      >
        {description}
      </DIPTypography>
    </DIPBox>
  );
}

// Setting default props for the DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: "info",
  direction: "left",
  small: false,
};

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
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
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["left", "right", "center"]),
  small: PropTypes.bool,
};

export default DefaultInfoCard;
