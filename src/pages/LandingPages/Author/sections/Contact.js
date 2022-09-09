


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


import DIPBox from "components/DIPBox";
import DIPInput from "components/DIPInput";
import DIPButton from "components/DIPButton";
import DIPTypography from "components/DIPTypography";

// Images
import bgImage from "assets/images/examples/blog2.jpg";

function Contact() {
  return (
    <DIPBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <DIPBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.8),
                      rgba(gradients.dark.state, 0.8)
                    )}, url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <DIPBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <DIPBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <DIPTypography variant="h3" color="white" mb={1}>
                      Contact Information
                    </DIPTypography>
                    <DIPTypography variant="body2" color="white" opacity={0.8} mb={3}>
                      Fill up the form and our Team will get back to you within 24 hours.
                    </DIPTypography>
                    <DIPBox display="flex" p={1}>
                      <DIPTypography variant="button" color="white">
                        <i className="fas fa-phone" />
                      </DIPTypography>
                      <DIPTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        (+40) 772 100 200
                      </DIPTypography>
                    </DIPBox>
                    <DIPBox display="flex" color="white" p={1}>
                      <DIPTypography variant="button" color="white">
                        <i className="fas fa-envelope" />
                      </DIPTypography>
                      <DIPTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        hello@creative-tim.com
                      </DIPTypography>
                    </DIPBox>
                    <DIPBox display="flex" color="white" p={1}>
                      <DIPTypography variant="button" color="white">
                        <i className="fas fa-map-marker-alt" />
                      </DIPTypography>
                      <DIPTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        Dyonisie Wolf Bucharest, RO 010458
                      </DIPTypography>
                    </DIPBox>
                    <DIPBox mt={3}>
                      <DIPButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} />
                      </DIPButton>
                      <DIPButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-twitter" style={{ fontSize: "1.25rem" }} />
                      </DIPButton>
                      <DIPButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-dribbble" style={{ fontSize: "1.25rem" }} />
                      </DIPButton>
                      <DIPButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />
                      </DIPButton>
                    </DIPBox>
                  </DIPBox>
                </DIPBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <DIPBox component="form" p={2} method="post">
                  <DIPBox px={3} py={{ xs: 2, sm: 6 }}>
                    <DIPTypography variant="h2" mb={1}>
                      Say Hi!
                    </DIPTypography>
                    <DIPTypography variant="body1" color="text" mb={2}>
                      We&apos;d like to talk with you.
                    </DIPTypography>
                  </DIPBox>
                  <DIPBox pt={0.5} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={6}>
                        <DIPInput
                          variant="standard"
                          label="My name is"
                          placeholder="Full Name"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <DIPInput
                          variant="standard"
                          label="I'm looking for"
                          placeholder="What you love"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <DIPInput
                          variant="standard"
                          label="Your message"
                          placeholder="I want to say that..."
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          multiline
                          rows={6}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <DIPButton variant="gradient" color="info">
                        Send Message
                      </DIPButton>
                    </Grid>
                  </DIPBox>
                </DIPBox>
              </Grid>
            </Grid>
          </DIPBox>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default Contact;
