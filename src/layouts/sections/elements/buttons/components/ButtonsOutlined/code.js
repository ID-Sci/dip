const buttonsOutlinedCode = `
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";


import DIPBox from "components/DIPBox";
import DIPButton from "components/DIPButton";

function ButtonsOutlined() {
  return (
    <DIPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={1}>
            <DIPButton variant="outlined" color="primary">
              primary
            </DIPButton>
            <DIPButton variant="outlined" color="secondary">
              secondary
            </DIPButton>
            <DIPButton variant="outlined" color="info">
              info
            </DIPButton>
            <DIPButton variant="outlined" color="success">
              success
            </DIPButton>
            <DIPButton variant="outlined" color="warning">
              warning
            </DIPButton>
            <DIPButton variant="outlined" color="error">
              error
            </DIPButton>
            <DIPButton variant="outlined" color="light">
              light
            </DIPButton>
            <DIPButton variant="outlined" color="dark">
              dark
            </DIPButton>
            <DIPButton variant="outlined" color="white">
              White
            </DIPButton>
          </Stack>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default ButtonsOutlined;`;

export default buttonsOutlinedCode;
