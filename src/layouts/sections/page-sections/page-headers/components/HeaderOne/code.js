/* eslint-disable no-template-curly-in-string */
const bgImage =
  "`${linearGradient(rgba(gradients.dark.main, 0.5), rgba(gradients.dark.state, 0.5))}, url(${bgImage})`";

const headerOneCode = `
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";


import DIPBox from "components/DIPBox";
import DIPButton from "components/DIPButton";
import DIPTypography from "components/DIPTypography";

// Images
import bgImage from "assets/images/bg-coworking.jpeg";

function HeaderOne() {
  return (
    <DIPBox component="header" position="relative">
      <DIPBox component="nav" position="absolute" top="0.5rem" width="100%">
        <Container>
          <Grid container flexDirection="row" alignItems="center">
            <DIPTypography
              component={Link}
              href="#"
              variant="button"
              color="white"
              fontWeight="regular"
              py={0.8125}
              mr={2}
            >
              Material Design
            </DIPTypography>
            <DIPButton
              variant="outlined"
              color="white"
              sx={{ display: { xs: "block", lg: "none" }, ml: "auto" }}
            >
              <DIPBox component="i" color="white" className="fas fa-bars" />
            </DIPButton>
            <DIPBox
              component="ul"
              display={{ xs: "none", lg: "flex" }}
              p={0}
              my={0}
              mx="auto"
              sx={{ listStyle: "none" }}
            >
              <DIPBox component="li">
                <DIPTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  Home
                </DIPTypography>
              </DIPBox>
              <DIPBox component="li">
                <DIPTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  About Us
                </DIPTypography>
              </DIPBox>
              <DIPBox component="li">
                <DIPTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  Contact Us
                </DIPTypography>
              </DIPBox>
            </DIPBox>
            <DIPBox
              component="ul"
              display={{ xs: "none", lg: "flex" }}
              p={0}
              m={0}
              sx={{ listStyle: "none" }}
            >
              <DIPBox component="li">
                <DIPTypography
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  <DIPBox component="i" color="white" className="fab fa-twitter" />
                </DIPTypography>
              </DIPBox>
              <DIPBox component="li">
                <DIPTypography
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  <DIPBox component="i" color="white" className="fab fa-facebook" />
                </DIPTypography>
              </DIPBox>
              <DIPBox component="li">
                <DIPTypography
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  <DIPBox component="i" color="white" className="fab fa-instagram" />
                </DIPTypography>
              </DIPBox>
            </DIPBox>
          </Grid>
        </Container>
      </DIPBox>
      <DIPBox
        display="flex"
        alignItems="center"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) => ${bgImage},
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} md={7} lg={6} flexDirection="column" justifyContent="center">
            <DIPTypography
              variant="h1"
              color="white"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              diseases in plants
            </DIPTypography>
            <DIPTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
              The time is now for it be okay to be great. People in this world shun people for being
              nice.
            </DIPTypography>
            <Stack direction="row" spacing={1} mt={3}>
              <DIPButton color="white">Get Started</DIPButton>
              <DIPButton variant="text" color="white">
                Read more
              </DIPButton>
            </Stack>
          </Grid>
        </Container>
      </DIPBox>
    </DIPBox>
  );
}

export default HeaderOne;`;

export default headerOneCode;
