const inputStaticCode = `
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


import DIPBox from "components/DIPBox";
import DIPInput from "components/DIPInput";

function InputStatic() {
  return (
    <DIPBox component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={4} py={1} mx="auto">
          <DIPInput
            variant="standard"
            label="Full Name"
            placeholder="eg. Thomas Shelby"
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default InputStatic;`;

export default inputStaticCode;
