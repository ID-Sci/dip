const inputDisabledCode = `
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


import DIPBox from "components/DIPBox";
import DIPInput from "components/DIPInput";

function InputDisabled() {
  return (
    <DIPBox component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={4} py={1} mx="auto">
          <DIPInput label="Disabled" fullWidth disabled />
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default InputDisabled;`;

export default inputDisabledCode;
