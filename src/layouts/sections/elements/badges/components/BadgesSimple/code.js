const badgesSimpleCode = `
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";


import DIPBox from "components/DIPBox";
import DIPBadge from "components/DIPBadge";

function BadgesSimple() {
  return (
    <DIPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={0.5}>
            <DIPBadge badgeContent="primary" variant="contained" color="primary" container />
            <DIPBadge badgeContent="secondary" variant="contained" color="secondary" container />
            <DIPBadge badgeContent="success" variant="contained" color="success" container />
            <DIPBadge badgeContent="error" variant="contained" color="error" container />
            <DIPBadge badgeContent="warning" variant="contained" color="warning" container />
            <DIPBadge badgeContent="info" variant="contained" color="info" container />
            <DIPBadge badgeContent="light" variant="contained" color="light" container />
            <DIPBadge badgeContent="dark" variant="contained" color="dark" container />
          </Stack>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default BadgesSimple;`;

export default badgesSimpleCode;
