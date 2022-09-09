


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";


import DIPBox from "components/DIPBox";
import DIPAvatar from "components/DIPAvatar";

// Images
import team4 from "assets/images/team-4.jpg";

function AvatarSize() {
  return (
    <DIPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={1}>
            <DIPAvatar src={team4} alt="xs" size="xs" />
            <DIPAvatar src={team4} alt="sm" size="sm" />
            <DIPAvatar src={team4} alt="md" size="md" />
            <DIPAvatar src={team4} alt="lg" size="lg" />
            <DIPAvatar src={team4} alt="xl" size="xl" />
            <DIPAvatar src={team4} alt="xxl" size="xxl" />
          </Stack>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default AvatarSize;
