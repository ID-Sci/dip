


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";


import DIPBox from "components/DIPBox";
import DIPTypography from "components/DIPTypography";
import DIPButton from "components/DIPButton";


import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Information from "pages/LandingPages/AboutUs/sections/Information";
import Team from "pages/LandingPages/AboutUs/sections/Team";
import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";

function AboutUs() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "default",
        }}
        transparent
        light
      />
      <DIPBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <DIPTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Work with an amazing design
            </DIPTypography>
            <DIPTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              We&apos;re constantly trying to express ourselves and actualize our dreams. If you
              have the opportunity to play this game
            </DIPTypography>
            <DIPButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              create account
            </DIPButton>
            <DIPTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </DIPTypography>
            <DIPBox display="flex" justifyContent="center" alignItems="center">
              <DIPTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-facebook" />
              </DIPTypography>
              <DIPTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-instagram" />
              </DIPTypography>
              <DIPTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-twitter" />
              </DIPTypography>
              <DIPTypography component="a" variant="body1" color="white" href="#">
                <i className="fab fa-google-plus" />
              </DIPTypography>
            </DIPBox>
          </Grid>
        </Container>
      </DIPBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Team />
        <Featuring />
        <Newsletter />
      </Card>
      <DIPBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </DIPBox>
    </>
  );
}

export default AboutUs;
