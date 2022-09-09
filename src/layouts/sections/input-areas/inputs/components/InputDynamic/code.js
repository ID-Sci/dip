const inputDynamicCode = `
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


import DIPBox from "components/DIPBox";
import DIPInput from "components/DIPInput";

function InputDynamic() {
  return (
    <DIPBox component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={4} py={1} mx="auto">
          <DIPInput variant="standard" label="Regular" fullWidth />
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default InputDynamic;`;

export default inputDynamicCode;
