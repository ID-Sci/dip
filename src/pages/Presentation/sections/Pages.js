

// react-router-dom components
import { Link } from "react-router-dom";


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


import DIPBox from "components/DIPBox";
import DIPBadge from "components/DIPBadge";
import DIPTypography from "components/DIPTypography";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
import data from "pages/Presentation/sections/data/pagesData";

function Pages() {
  const renderData = data.map(({ image, name, route }) => (
    <Grid item xs={12} md={6} sx={{ mb: { xs: 3, lg: 0 } }} key={name}>
      <Link to={route}>
        <ExampleCard image={image} name={name} display="grid" minHeight="auto" />
      </Link>
    </Grid>
  ));

  return (
    <DIPBox component="section" py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <DIPBadge
            variant="contained"
            color="info"
            badgeContent="boost creativity"
            container
            sx={{ mb: 2 }}
          />
          <DIPTypography variant="h2" fontWeight="bold">
            With our coded pages
          </DIPTypography>
          <DIPTypography variant="body1" color="text">
            The easiest way to get started is to use one of our
            <br /> pre-built example pages.
          </DIPTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: { xs: 8, lg: 16 } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={9} sx={{ mt: 3, px: { xs: 0, lg: 8 } }}>
            <Grid container spacing={3}>
              {renderData}
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3}>
            <DIPBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
              <DIPTypography variant="h3" fontWeight="bold" mb={1}>
                Presentation Pages for Company, Landing Pages, Blogs and Support
              </DIPTypography>
              <DIPTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                These is just a small selection of the multiple possibitilies you have. Focus on the
                business, not on the design.
              </DIPTypography>
            </DIPBox>
          </Grid>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default Pages;
