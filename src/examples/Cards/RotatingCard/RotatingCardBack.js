

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-router-dom components
import { Link } from "react-router-dom";


import MuiLink from "@mui/material/Link";


import DIPBox from "components/DIPBox";
import DIPTypography from "components/DIPTypography";
import DIPButton from "components/DIPButton";

function RotatingCard({ color, image, title, description, action }) {
  return (
    <DIPBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="lg"
      coloredShadow={color}
      position="absolute"
      width="100%"
      height="100%"
      top={0}
      left={0}
      zIndex={5}
      sx={{
        backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
          `${linearGradient(
            rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.85),
            rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.85)
          )}, url(${image})`,
        backgroundSize: "cover",
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
      }}
    >
      <DIPBox pt={12} pb={2} px={2} textAlign="center" lineHeight={1}>
        <DIPTypography variant="h3" color="white" gutterBottom>
          {title}
        </DIPTypography>
        <DIPTypography variant="body2" color="white" opacity={0.8}>
          {description}
        </DIPTypography>
        {action && (
          <DIPBox width="50%" mt={4} mb={2} mx="auto">
            {action.type === "external" ? (
              <DIPButton
                component={MuiLink}
                href={action.route}
                target="_blank"
                rel="noreferrer"
                color="white"
                size="small"
                fullWidth
              >
                {action.label}
              </DIPButton>
            ) : (
              <DIPButton component={Link} to={action.route} color="white" size="small" fullWidth>
                {action.label}
              </DIPButton>
            )}
          </DIPBox>
        )}
      </DIPBox>
    </DIPBox>
  );
}

// Setting default props for the RotatingCard
RotatingCard.defaultProps = {
  color: "info",
};

// Typechecking props for the RotatingCard
RotatingCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  image: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ]).isRequired,
};

export default RotatingCard;
