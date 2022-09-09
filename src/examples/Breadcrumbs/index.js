
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-router-dom components
import { Link } from "react-router-dom";


import MuiBreadcrumbs from "@mui/material/Breadcrumbs";


import DIPBox from "components/DIPBox";
import DIPTypography from "components/DIPTypography";

function Breadcrumbs({ routes, ...rest }) {
  return (
    <DIPBox bgColor="light" borderRadius="md" py={1} px={2} width="100%">
      <MuiBreadcrumbs {...rest}>
        {routes.map(({ label, route }) =>
          route ? (
            <DIPTypography
              key={label}
              component={Link}
              to={route}
              variant="button"
              color="text"
              fontWeight="regular"
              opacity={0.8}
              sx={{
                "&:hover, &:focus": {
                  color: ({ palette: { info } }) => info.main,
                },
              }}
            >
              {label}
            </DIPTypography>
          ) : (
            <DIPTypography key={label} variant="button" fontWeight="regular">
              {label}
            </DIPTypography>
          )
        )}
      </MuiBreadcrumbs>
    </DIPBox>
  );
}

// Typechecking props for the Breadcrumbs
Breadcrumbs.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Breadcrumbs;
