const inputErrorCode = `
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


import DIPBox from "components/DIPBox";
import DIPInput from "components/DIPInput";

function InputError() {
  return (
    <DIPBox component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={4} py={1} mx="auto">
          <DIPInput label="Error" fullWidth error />
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default InputError;`;

export default inputErrorCode;
