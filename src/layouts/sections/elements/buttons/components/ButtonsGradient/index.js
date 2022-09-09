


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";


import DIPBox from "components/DIPBox";
import DIPButton from "components/DIPButton";

function ButtonsGradient() {
  return (
    <DIPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={1}>
            <DIPButton variant="gradient" color="primary">
              primary
            </DIPButton>
            <DIPButton variant="gradient" color="secondary">
              secondary
            </DIPButton>
            <DIPButton variant="gradient" color="info">
              info
            </DIPButton>
            <DIPButton variant="gradient" color="success">
              success
            </DIPButton>
            <DIPButton variant="gradient" color="warning">
              warning
            </DIPButton>
            <DIPButton variant="gradient" color="error">
              error
            </DIPButton>
            <DIPButton variant="gradient" color="light">
              light
            </DIPButton>
            <DIPButton variant="gradient" color="dark">
              dark
            </DIPButton>
            <DIPButton variant="gradient" color="white">
              White
            </DIPButton>
          </Stack>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default ButtonsGradient;
