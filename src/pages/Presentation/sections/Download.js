


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";


import DIPBox from "components/DIPBox";
import DIPButton from "components/DIPButton";
import DIPTypography from "components/DIPTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";

function Download() {
  return (
    <DIPBox component="section" py={{ xs: 0, sm: 12 }}>
      <DIPBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <DIPBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <DIPTypography variant="h3" color="white">
              Do you love this awesome
            </DIPTypography>
            <DIPTypography variant="h3" color="white" mb={1}>
              UI Kit for ReactJS &amp; MUI?
            </DIPTypography>
            <DIPTypography variant="body2" color="white" mb={6}>
              Cause if you do, it can be yours for FREE. Hit the button below to navigate to
              Creative Tim where you can find the Design System in HTML. Start a new project or give
              an old Bootstrap project a new look!
            </DIPTypography>
            <DIPButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              href="https://www.creative-tim.com/product/material-kit-react"
              sx={{ mb: 2 }}
            >
              Download Now
            </DIPButton>
          </Grid>
        </Container>
      </DIPBox>
      <Container>
        <Grid container item xs={6} mx="auto">
          <DIPBox textAlign="center">
            <DIPTypography variant="h3" mt={6} mb={3}>
              Available on these technologies
            </DIPTypography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={4} lg={2}>
                <Tooltip title="Bootstrap 5 - Most popular front-end component library">
                  <DIPBox
                    component="a"
                    href="https://www.creative-tim.com/product/material-kit"
                    target="_blank"
                  >
                    <DIPBox
                      component="img"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/bootstrap5.jpg"
                      width="100%"
                    />
                  </DIPBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <DIPBox
                    opacity={0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <DIPBox
                      component="img"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/icon-tailwind.jpg"
                      width="100%"
                    />
                  </DIPBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <DIPBox
                    opacity={0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <DIPBox
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg"
                      width="100%"
                    />
                  </DIPBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <DIPBox
                    opacity={0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <DIPBox
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg"
                      width="100%"
                    />
                  </DIPBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <DIPBox
                    component="a"
                    href="https://www.creative-tim.com/product/material-kit-react"
                    target="_blank"
                  >
                    <DIPBox
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"
                      width="100%"
                    />
                  </DIPBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <DIPBox
                    opacity={0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <DIPBox
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg"
                      width="100%"
                    />
                  </DIPBox>
                </Tooltip>
              </Grid>
            </Grid>
          </DIPBox>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default Download;
