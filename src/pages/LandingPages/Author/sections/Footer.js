


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";


import DIPBox from "components/DIPBox";
import DIPTypography from "components/DIPTypography";

function Footer() {
  return (
    <DIPBox component="footer" py={6}>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            lg={4}
            textAlign={{ xs: "center", lg: "left" }}
            mr="auto"
            mb={{ xs: 3, lg: 0 }}
          >
            <DIPTypography variant="h6" textTransform="uppercase" mb={{ xs: 2, lg: 3 }}>
              Material Design
            </DIPTypography>
            <Stack
              component="ul"
              direction="row"
              flexWrap="wrap"
              spacing={3}
              justifyContent={{ xs: "center", lg: "flex-start" }}
              pl={0}
              mb={3}
              sx={{ listStyle: "none" }}
            >
              <DIPBox component="li">
                <DIPTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="https://www.creative-tim.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Home
                </DIPTypography>
              </DIPBox>
              <DIPBox component="li">
                <DIPTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="https://www.creative-tim.com/presentation"
                  target="_blank"
                  rel="noreferrer"
                >
                  About
                </DIPTypography>
              </DIPBox>
              <DIPBox component="li">
                <DIPTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="https://www.creative-tim.com/blog"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blog
                </DIPTypography>
              </DIPBox>
              <DIPBox component="li">
                <DIPTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="https://www.creative-tim.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Services
                </DIPTypography>
              </DIPBox>
            </Stack>
            <DIPTypography variant="button" opacity={0.8}>
              Copyright © <script>document.write(new Date().getFullYear())</script>2021 Material
              Design by Creative Tim.
            </DIPTypography>
          </Grid>
          <Grid item xs={12} lg={6} ml="auto" textAlign={{ xs: "center", lg: "right" }}>
            <DIPTypography variant="body1" fontWeight="bold" mb={6} sx={{ fontSize: "1.125rem" }}>
              The reward for getting on the stage is fame. The price of fame is you can&apos;t get
              off the stage.
            </DIPTypography>
            <DIPTypography
              component={Link}
              href="#dribbble"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              opacity={0.5}
              mr={3}
            >
              <i className="fab fa-dribbble" />
            </DIPTypography>
            <DIPTypography
              component={Link}
              href="#twitter"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              opacity={0.5}
              mr={3}
            >
              <i className="fab fa-twitter" />
            </DIPTypography>
            <DIPTypography
              component={Link}
              href="#pinterest"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              opacity={0.5}
              mr={3}
            >
              <i className="fab fa-pinterest" />
            </DIPTypography>
            <DIPTypography
              component={Link}
              href="#github"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              opacity={0.5}
            >
              <i className="fab fa-github" />
            </DIPTypography>
          </Grid>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default Footer;
