const toggleContextCode = `import { useState } from "react";


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";


import DIPBox from "components/DIPBox";
import DIPTypography from "components/DIPTypography";

function ToggleContext() {
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => setChecked(!checked);

  return (
    <DIPBox component="section" py={8}>
      <Container>
        <Grid container item xs={4} justifyContent="center" mx="auto">
          <DIPBox display="flex" alignItems="center">
            <Switch checked={checked} onChange={toggleSwitch} />
            <DIPBox ml={2} lineHeight={0.5}>
              <DIPTypography display="block" variant="button" fontWeight="bold">
                Remember me
              </DIPTypography>
              <DIPTypography variant="caption" color="text" fontWeight="regular">
                Be sure that you will always be logged in.
              </DIPTypography>
            </DIPBox>
          </DIPBox>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default ToggleContext;`;

export default toggleContextCode;
