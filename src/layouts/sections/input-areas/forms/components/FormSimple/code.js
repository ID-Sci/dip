const formSimpleCode = `import { useState } from "react";


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";


import DIPBox from "components/DIPBox";
import DIPInput from "components/DIPInput";
import DIPButton from "components/DIPButton";
import DIPTypography from "components/DIPTypography";

function FormSimple() {
  const [checked, setChecked] = useState(true);

  const handleChecked = () => setChecked(!checked);

  return (
    <DIPBox component="section" py={12}>
      <Container>
        <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <DIPTypography variant="h3" mb={1}>
            Contact Us
          </DIPTypography>
        </Grid>
        <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
          <DIPBox width="100%" component="form" method="post" autocomplete="off">
            <DIPBox p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <DIPInput variant="standard" label="First Name" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DIPInput variant="standard" label="Last Name" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <DIPInput variant="standard" type="email" label="Email Address" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <DIPInput variant="standard" label="Your Message" multiline fullWidth rows={6} />
                </Grid>
                <Grid item xs={12} alignItems="center" ml={-1}>
                  <Switch checked={checked} onChange={handleChecked} />
                  <DIPTypography
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    ml={-1}
                    sx={{ cursor: "pointer", userSelect: "none" }}
                    onClick={handleChecked}
                  >
                    &nbsp;&nbsp;I agree the&nbsp;
                  </DIPTypography>
                  <DIPTypography
                    component="a"
                    href="#"
                    variant="button"
                    fontWeight="regular"
                    color="dark"
                  >
                    Terms and Conditions
                  </DIPTypography>
                </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} my={2}>
                <DIPButton type="submit" variant="gradient" color="dark" fullWidth>
                  Send Message
                </DIPButton>
              </Grid>
            </DIPBox>
          </DIPBox>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default FormSimple;`;

export default formSimpleCode;
