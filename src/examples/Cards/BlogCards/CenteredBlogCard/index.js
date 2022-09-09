

import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";


import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";


import DIPBox from "components/DIPBox";
import DIPTypography from "components/DIPTypography";
import DIPButton from "components/DIPButton";

function CenteredBlogCard({ image, title, description, action }) {
  return (
    <Card>
      <DIPBox position="relative" borderRadius="lg" mx={2} mt={-3}>
        <DIPBox
          component="img"
          src={image}
          alt={title}
          borderRadius="lg"
          width="100%"
          position="relative"
          zIndex={1}
        />
        <DIPBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top={0}
          sx={{
            backgroundImage: `url(${image})`,
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </DIPBox>
      <DIPBox p={3} mt={-1} textAlign="center">
        <DIPTypography display="inline" variant="h5" textTransform="capitalize" fontWeight="regular">
          {title}
        </DIPTypography>
        <DIPBox mt={1} mb={3}>
          <DIPTypography variant="body2" component="p" color="text">
            {description}
          </DIPTypography>
        </DIPBox>
        {action.type === "external" ? (
          <DIPButton
            component={MuiLink}
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="gradient"
            size="small"
            color={action.color ? action.color : "dark"}
          >
            {action.label}
          </DIPButton>
        ) : (
          <DIPButton
            component={Link}
            to={action.route}
            variant="gradient"
            size="small"
            color={action.color ? action.color : "dark"}
          >
            {action.label}
          </DIPButton>
        )}
      </DIPBox>
    </Card>
  );
}

// Typechecking props for the CenteredBlogCard
CenteredBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
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
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default CenteredBlogCard;
