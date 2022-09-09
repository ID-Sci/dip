

import { useState } from "react";


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";


import DIPBox from "components/DIPBox";
import DIPButton from "components/DIPButton";
import DIPTypography from "components/DIPTypography";

function SimpleModal() {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

  return (
    <DIPBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} justifyContent="center" mx="auto">
          <DIPButton variant="gradient" color="info" onClick={toggleModal}>
            Launch Demo Modal
          </DIPButton>
        </Grid>
        <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
          <Slide direction="down" in={show} timeout={500}>
            <DIPBox
              position="relative"
              width="500px"
              display="flex"
              flexDirection="column"
              borderRadius="xl"
              bgColor="white"
              shadow="xl"
            >
              <DIPBox display="flex" alginItems="center" justifyContent="space-between" p={2}>
                <DIPTypography variant="h5">Your modal title</DIPTypography>
                <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
              </DIPBox>
              <Divider sx={{ my: 0 }} />
              <DIPBox p={2}>
                <DIPTypography variant="body2" color="secondary" fontWeight="regular">
                  Society has put up so many boundaries, so many limitations on what&apos;s right
                  and wrong that it&apos;s almost impossible to get a pure thought out.
                  <br />
                  <br />
                  It&apos;s like a little kid, a little boy, looking at colors, and no one told him
                  what colors are good, before somebody tells you you shouldn&apos;t like pink
                  because that&apos;s for girls, or you&apos;d instantly become a gay two-year-old.
                </DIPTypography>
              </DIPBox>
              <Divider sx={{ my: 0 }} />
              <DIPBox display="flex" justifyContent="space-between" p={1.5}>
                <DIPButton variant="gradient" color="dark" onClick={toggleModal}>
                  close
                </DIPButton>
                <DIPButton variant="gradient" color="info">
                  save changes
                </DIPButton>
              </DIPBox>
            </DIPBox>
          </Slide>
        </Modal>
      </Container>
    </DIPBox>
  );
}

export default SimpleModal;
