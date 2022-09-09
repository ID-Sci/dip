


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";


import DIPBox from "components/DIPBox";
import DIPButton from "components/DIPButton";

function ButtonsIconLeft() {
  return (
    <DIPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            <DIPButton color="info" size="small">
              <Icon sx={{ mr: 1 }}>favorite</Icon>
              small
            </DIPButton>
            <DIPButton color="info">
              <Icon sx={{ mr: 1 }}>favorite</Icon>
              default
            </DIPButton>
            <DIPButton color="info" size="large">
              <Icon sx={{ mr: 1 }}>favorite</Icon>
              large
            </DIPButton>
          </Stack>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default ButtonsIconLeft;
