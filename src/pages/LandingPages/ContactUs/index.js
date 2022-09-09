


import Grid from "@mui/material/Grid";


import DIPBox from "components/DIPBox";
import DIPInput from "components/DIPInput";
import DIPButton from "components/DIPButton";
import DIPTypography from "components/DIPTypography";


import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
import bgImage from "assets/images/illustrations/illustration-reset.jpg";

function ContactUs() {
  return (
    <>
      <DIPBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "https://www.creative-tim.com/product/material-kit-react",
            label: "free download",
            color: "info",
          }}
        />
      </DIPBox>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <DIPBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <DIPBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <DIPBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <DIPTypography variant="h3" color="white">
                Contact us
              </DIPTypography>
            </DIPBox>
            <DIPBox p={3}>
              <DIPTypography variant="body2" color="text" mb={3}>
                For further questions, including partnership opportunities, please email
                hello@creative-tim.com or contact using our contact form.
              </DIPTypography>
              <DIPBox width="100%" component="form" method="post" autocomplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <DIPInput
                      variant="standard"
                      label="Full Name"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <DIPInput
                      type="email"
                      variant="standard"
                      label="Email"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <DIPInput
                      variant="standard"
                      label="What can we help you?"
                      placeholder="Describe your problem in at least 250 characters"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <DIPButton type="submit" variant="gradient" color="info">
                    Send Message
                  </DIPButton>
                </Grid>
              </DIPBox>
            </DIPBox>
          </DIPBox>
        </Grid>
      </Grid>
      <DIPBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </DIPBox>
    </>
  );
}

export default ContactUs;
