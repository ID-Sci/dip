


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";


import DIPBox from "components/DIPBox";
import DIPBadge from "components/DIPBadge";

function BadgesGradient() {
  return (
    <DIPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={0.5}>
            <DIPBadge badgeContent="primary" color="primary" container />
            <DIPBadge badgeContent="secondary" color="secondary" container />
            <DIPBadge badgeContent="success" color="success" container />
            <DIPBadge badgeContent="error" color="error" container />
            <DIPBadge badgeContent="warning" color="warning" container />
            <DIPBadge badgeContent="info" color="info" container />
            <DIPBadge badgeContent="light" color="light" container />
            <DIPBadge badgeContent="dark" color="dark" container />
          </Stack>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default BadgesGradient;
