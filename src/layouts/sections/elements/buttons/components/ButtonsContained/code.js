const buttonsContainedCode = `
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";


import DIPBox from "components/DIPBox";
import DIPButton from "components/DIPButton";

function ButtonsContained() {
  return (
    <DIPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={1}>
            <DIPButton color="primary">primary</DIPButton>
            <DIPButton color="secondary">secondary</DIPButton>
            <DIPButton color="info">info</DIPButton>
            <DIPButton color="success">success</DIPButton>
            <DIPButton color="warning">warning</DIPButton>
            <DIPButton color="error">error</DIPButton>
            <DIPButton color="light">light</DIPButton>
            <DIPButton color="dark">dark</DIPButton>
            <DIPButton color="white">White</DIPButton>
          </Stack>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default ButtonsContained;`;

export default buttonsContainedCode;
