

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


import DIPBox from "components/DIPBox";
import DIPTypography from "components/DIPTypography";


import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import CenteredFooter from "examples/Footers/CenteredFooter";
import Breadcrumbs from "examples/Breadcrumbs";

// Routes
import routes from "routes";

function BaseLayout({ breadcrumb, title, children }) {
  return (
    <DIPBox display="flex" flexDirection="column" bgColor="white" minHeight="100vh">
      <DIPBox bgColor="white" shadow="sm" py={0.25}>
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "https://www.creative-tim.com/product/material-kit-react",
            label: "free download",
            color: "info",
          }}
          transparent
          relative
        />
      </DIPBox>
      <Container sx={{ mt: 6 }}>
        <Grid container item xs={12} flexDirection="column" justifyContent="center" mx="auto">
          <DIPBox width={{ xs: "100%", md: "50%", lg: "25%" }} mb={3}>
            <Breadcrumbs routes={breadcrumb} />
          </DIPBox>
          <DIPTypography variant="h3" mb={1}>
            {title}
          </DIPTypography>
          {children}
        </Grid>
      </Container>
      <DIPBox mt="auto">
        <CenteredFooter />
      </DIPBox>
    </DIPBox>
  );
}

// Typechecking props for the BaseLayout
BaseLayout.propTypes = {
  breadcrumb: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
