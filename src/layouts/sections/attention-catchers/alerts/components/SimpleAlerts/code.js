const simpleAlertsCode = `
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


import DIPBox from "components/DIPBox";
import DIPAlert from "components/DIPAlert";

function SimpleAlerts() {
  return (
    <DIPBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} mx="auto">
          <Grid item xs={12}>
            <DIPAlert color="primary">A simple primary alert—check it out!</DIPAlert>
          </Grid>
          <Grid item xs={12}>
            <DIPAlert color="secondary">A simple secondary alert—check it out!</DIPAlert>
          </Grid>
          <Grid item xs={12}>
            <DIPAlert color="success">A simple success alert—check it out!</DIPAlert>
          </Grid>
          <Grid item xs={12}>
            <DIPAlert color="error">A simple error alert—check it out!</DIPAlert>
          </Grid>
          <Grid item xs={12}>
            <DIPAlert color="warning">A simple warning alert—check it out!</DIPAlert>
          </Grid>
          <Grid item xs={12}>
            <DIPAlert color="info">A simple info alert—check it out!</DIPAlert>
          </Grid>
          <Grid item xs={12}>
            <DIPAlert color="light">A simple light alert—check it out!</DIPAlert>
          </Grid>
          <Grid item xs={12}>
            <DIPAlert color="dark">A simple dark alert—check it out!</DIPAlert>
          </Grid>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default SimpleAlerts;`;

export default simpleAlertsCode;
