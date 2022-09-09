


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";


import DIPBox from "components/DIPBox";
import DIPButton from "components/DIPButton";

function Tooltips() {
  return (
    <DIPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" spacing={1}>
            <Tooltip title="Tooltip on top" placement="top">
              <DIPButton variant="gradient" color="info">
                tooltip on top
              </DIPButton>
            </Tooltip>
            <Tooltip title="Tooltip on right" placement="right">
              <DIPButton variant="gradient" color="info">
                tooltip on right
              </DIPButton>
            </Tooltip>
            <Tooltip title="Tooltip on bottom" placement="bottom">
              <DIPButton variant="gradient" color="info">
                tooltip on bottom
              </DIPButton>
            </Tooltip>
            <Tooltip title="Tooltip on left" placement="left">
              <DIPButton variant="gradient" color="info">
                tooltip on left
              </DIPButton>
            </Tooltip>
          </Stack>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default Tooltips;
