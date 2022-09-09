
import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";


import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";


import DIPBox from "components/DIPBox";
import DIPTypography from "components/DIPTypography";
import DIPInput from "components/DIPInput";
import DIPButton from "components/DIPButton";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";
 
import routes from "routes";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function SignInBasic() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        transparent
        light
      />
      <DIPBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <DIPBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <DIPBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <DIPTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Sign in
                </DIPTypography>
                <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
                  <Grid item xs={2}>
                    <DIPTypography component={MuiLink} href="#" variant="body1" color="white">
                      <FacebookIcon color="inherit" />
                    </DIPTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <DIPTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GitHubIcon color="inherit" />
                    </DIPTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <DIPTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GoogleIcon color="inherit" />
                    </DIPTypography>
                  </Grid>
                </Grid>
              </DIPBox>
              <DIPBox pt={4} pb={3} px={3}>
                <DIPBox component="form" role="form">
                  <DIPBox mb={2}>
                    <DIPInput type="email" label="Email" fullWidth />
                  </DIPBox>
                  <DIPBox mb={2}>
                    <DIPInput type="password" label="Password" fullWidth />
                  </DIPBox>
                  <DIPBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <DIPTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </DIPTypography>
                  </DIPBox>
                  <DIPBox mt={4} mb={1}>
                    <DIPButton variant="gradient" color="info" fullWidth>
                      sign in
                    </DIPButton>
                  </DIPBox>
                  <DIPBox mt={3} mb={1} textAlign="center">
                    <DIPTypography variant="button" color="text">
                      Don&apos;t have an account?{" "}
                      <DIPTypography
                        component={Link}
                        to="/authentication/sign-up/cover"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign up
                      </DIPTypography>
                    </DIPTypography>
                  </DIPBox>
                </DIPBox>
              </DIPBox>
            </Card>
          </Grid>
        </Grid>
      </DIPBox>
      <DIPBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </DIPBox>
    </>
  );
}

export default SignInBasic;
