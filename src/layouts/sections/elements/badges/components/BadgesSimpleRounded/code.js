const badgesSimpleRoundedCode = `
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";


import DIPBox from "components/DIPBox";
import DIPBadge from "components/DIPBadge";

function BadgesSimpleRounded() {
  return (
    <DIPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={0.5}>
            <DIPBadge
              badgeContent="primary"
              variant="contained"
              color="primary"
              container
              circular
            />
            <DIPBadge
              badgeContent="secondary"
              variant="contained"
              color="secondary"
              container
              circular
            />
            <DIPBadge
              badgeContent="success"
              variant="contained"
              color="success"
              container
              circular
            />
            <DIPBadge badgeContent="error" variant="contained" color="error" container circular />
            <DIPBadge
              badgeContent="warning"
              variant="contained"
              color="warning"
              container
              circular
            />
            <DIPBadge badgeContent="info" variant="contained" color="info" container circular />
            <DIPBadge badgeContent="light" variant="contained" color="light" container circular />
            <DIPBadge badgeContent="dark" variant="contained" color="dark" container circular />
          </Stack>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default BadgesSimpleRounded;`;

export default badgesSimpleRoundedCode;
