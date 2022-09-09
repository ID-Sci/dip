


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";


import DIPBox from "components/DIPBox";
import DIPProgress from "components/DIPProgress";

function ProgressSimple() {
  return (
    <DIPBox component="section" bgColor="white" py={12}>
      <Container>
        <Grid container item xs={12} lg={6} justifyContent="center" mx="auto">
          <Stack spacing={2} width="100%">
            <DIPProgress color="primary" value={50} />
            <DIPProgress color="secondary" value={50} />
            <DIPProgress color="success" value={50} />
            <DIPProgress color="info" value={50} />
            <DIPProgress color="warning" value={50} />
            <DIPProgress color="error" value={50} />
            <DIPProgress color="dark" value={50} />
          </Stack>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default ProgressSimple;
