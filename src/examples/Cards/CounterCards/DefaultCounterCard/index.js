

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-countup component
import CountUp from "react-countup";


import DIPBox from "components/DIPBox";
import DIPTypography from "components/DIPTypography";

function DefaultCounterCard({ color, count, title, description, ...rest }) {
  return (
    <DIPBox p={2} textAlign="center" lineHeight={1}>
      <DIPTypography variant="h1" color={color} textGradient>
        <CountUp end={count} duration={1} {...rest} />
      </DIPTypography>
      {title && (
        <DIPTypography variant="h5" mt={2} mb={1}>
          {title}
        </DIPTypography>
      )}
      {description && (
        <DIPTypography variant="body2" color="text">
          {description}
        </DIPTypography>
      )}
    </DIPBox>
  );
}

// Setting default props for the DefaultCounterCard
DefaultCounterCard.defaultProps = {
  color: "info",
  description: "",
  title: "",
};

// Typechecking props for the DefaultCounterCard
DefaultCounterCard.propTypes = {
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
  count: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default DefaultCounterCard;
