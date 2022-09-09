const popoversCode = `import { useState } from "react";


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Popover from "@mui/material/Popover";


import DIPBox from "components/DIPBox";
import DIPButton from "components/DIPButton";
import DIPTypography from "components/DIPTypography";

function Popovers() {
  const [popover, setPopover] = useState(null);
  const [popoverOrigin, setPopoverOrigin] = useState({
    anchorOrigin: {
      vertical: "top",
      horizontal: "center",
    },
    transformOrigin: {
      vertical: "bottom",
      horizontal: "center",
    },
  });

  const togglePopover = ({ currentTarget }) => setPopover(currentTarget);
  const closePopover = () => setPopover(null);

  const popoverTemplate = (
    <Popover open={Boolean(popover)} anchorEl={popover} onClose={closePopover} {...popoverOrigin}>
      <DIPBox bgColor="white" py={1.5} px={2} lineHeight={0.8}>
        <DIPTypography variant="caption" color="text">
          That&apos;s the main thing people are controlled
          <br /> by! Thoughts- their perception of themselves!
        </DIPTypography>
      </DIPBox>
    </Popover>
  );

  return (
    <DIPBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" spacing={1}>
            <DIPButton
              variant="gradient"
              color="info"
              onClick={(event) => {
                togglePopover(event);
                setPopoverOrigin({
                  anchorOrigin: {
                    vertical: "top",
                    horizontal: "center",
                  },
                  transformOrigin: {
                    vertical: "bottom",
                    horizontal: "center",
                  },
                });
              }}
            >
              popover on top
            </DIPButton>
            <DIPButton
              variant="gradient"
              color="info"
              onClick={(event) => {
                togglePopover(event);
                setPopoverOrigin({
                  anchorOrigin: {
                    vertical: "center",
                    horizontal: "right",
                  },
                  transformOrigin: {
                    vertical: "center",
                    horizontal: "left",
                  },
                });
              }}
            >
              popover on right
            </DIPButton>
            <DIPButton
              variant="gradient"
              color="info"
              onClick={(event) => {
                togglePopover(event);
                setPopoverOrigin({
                  anchorOrigin: {
                    vertical: "center",
                    horizontal: "left",
                  },
                  transformOrigin: {
                    vertical: "center",
                    horizontal: "right",
                  },
                });
              }}
            >
              popover on left
            </DIPButton>
            <DIPButton
              variant="gradient"
              color="info"
              onClick={(event) => {
                togglePopover(event);
                setPopoverOrigin({
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "center",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "center",
                  },
                });
              }}
            >
              popover on bottom
            </DIPButton>
          </Stack>
        </Grid>
        {popoverTemplate}
      </Container>
    </DIPBox>
  );
}

export default Popovers;`;

export default popoversCode;
