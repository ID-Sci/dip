const toggleCode = `import { useState } from "react";


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";


import DIPBox from "components/DIPBox";
import DIPTypography from "components/DIPTypography";

function Toggle() {
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => setChecked(!checked);

  return (
    <DIPBox component="section" py={8}>
      <Container>
        <Grid container item xs={4} justifyContent="center" mx="auto">
          <DIPBox display="flex" alignItems="center">
            <Switch checked={checked} onChange={toggleSwitch} />
            <DIPTypography
              variant="button"
              color="text"
              fontWeight="regular"
              ml={1}
              sx={{ cursor: "pointer", userSelect: "none" }}
              onClick={toggleSwitch}
            >
              Remember me
            </DIPTypography>
          </DIPBox>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default Toggle;`;

export default toggleCode;
