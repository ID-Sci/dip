


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";


import DIPBox from "components/DIPBox";
import DIPButton from "components/DIPButton";

function ButtonsSizes() {
  return (
    <DIPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            <DIPButton color="info" size="small">
              small
            </DIPButton>
            <DIPButton color="info">default</DIPButton>
            <DIPButton color="info" size="large">
              large
            </DIPButton>
          </Stack>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default ButtonsSizes;
