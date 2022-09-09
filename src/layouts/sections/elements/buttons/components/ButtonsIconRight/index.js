


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";


import DIPBox from "components/DIPBox";
import DIPButton from "components/DIPButton";

function ButtonsIconRight() {
  return (
    <DIPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            <DIPButton color="info" size="small">
              small
              <Icon sx={{ ml: 1 }}>favorite</Icon>
            </DIPButton>
            <DIPButton color="info">
              default
              <Icon sx={{ ml: 1 }}>favorite</Icon>
            </DIPButton>
            <DIPButton color="info" size="large">
              large
              <Icon sx={{ ml: 1 }}>favorite</Icon>
            </DIPButton>
          </Stack>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default ButtonsIconRight;
