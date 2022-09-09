


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MuiAvatarGroup from "@mui/material/AvatarGroup";


import DIPBox from "components/DIPBox";
import DIPAvatar from "components/DIPAvatar";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function AvatarGroup() {
  return (
    <DIPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <MuiAvatarGroup spacing={12}>
            <DIPAvatar src={team1} alt="team 1" size="lg" />
            <DIPAvatar src={team2} alt="team 2" size="lg" />
            <DIPAvatar src={team3} alt="team 3" size="lg" />
            <DIPAvatar src={team4} alt="team 4" size="lg" />
          </MuiAvatarGroup>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default AvatarGroup;
