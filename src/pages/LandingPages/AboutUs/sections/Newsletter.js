/* eslint-disable react/jsx-no-duplicate-props */



import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


import DIPBox from "components/DIPBox";
import DIPTypography from "components/DIPTypography";
import DIPInput from "components/DIPInput";
import DIPButton from "components/DIPButton";

// Images
import macbook from "assets/images/macbook.png";

function Newsletter() {
  return (
    <DIPBox component="section" pt={6} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item sx={12} md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <DIPTypography variant="h4">Be the first to see the news</DIPTypography>
            <DIPTypography variant="body2" color="text" mb={3}>
              Your company may not be in the software business, but eventually, a software company
              will be in your business.
            </DIPTypography>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <DIPInput type="email" label="Email Here..." fullWidth />
              </Grid>
              <Grid item xs={4}>
                <DIPButton variant="gradient" color="info" sx={{ height: "100%" }}>
                  Subscribe
                </DIPButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <DIPBox position="relative">
              <DIPBox component="img" src={macbook} alt="macbook" width="100%" />
            </DIPBox>
          </Grid>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default Newsletter;
