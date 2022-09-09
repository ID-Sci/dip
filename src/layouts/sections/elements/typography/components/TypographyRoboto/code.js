const typographyCode = `
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


import DIPBox from "components/DIPBox";
import DIPTypography from "components/DIPTypography";

function Typography() {
  return (
    <DIPBox component="section" py={8}>
      <Container>
        <DIPTypography variant="h2" mb={6}>
          Typography - Font Family Roboto
        </DIPTypography>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <DIPTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 1
            </DIPTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <DIPTypography variant="h1">H1 diseases in plants</DIPTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <DIPTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 2
            </DIPTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <DIPTypography variant="h2">H2 diseases in plants</DIPTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <DIPTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 3
            </DIPTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <DIPTypography variant="h3">H3 diseases in plants</DIPTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <DIPTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 4
            </DIPTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <DIPTypography variant="h4">H4 diseases in plants</DIPTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <DIPTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 5
            </DIPTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <DIPTypography variant="h5">H5 diseases in plants</DIPTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <DIPTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 6
            </DIPTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <DIPTypography variant="h6">H6 diseases in plants</DIPTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <DIPTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Lead Text
            </DIPTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <DIPTypography variant="body1" color="text">
              I will be the leader of a company that ends up being worth billions of dollars,
              because I got the answers. I understand culture. I am the nucleus. I think that&apos;s
              a responsibility that I have, to push possibilities, to show people, this is the level
              that things could be at.
            </DIPTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <DIPTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Paragraph
            </DIPTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <DIPTypography variant="body2" color="text">
              I will be the leader of a company that ends up being worth billions of dollars,
              because I got the answers. I understand culture. I am the nucleus. I think that&apos;s
              a responsibility that I have, to push possibilities, to show people, this is the level
              that things could be at.
            </DIPTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <DIPTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Small
            </DIPTypography>
          </Grid>

          <Grid item xs={12} sm={9} lineHeight={1}>
            <DIPTypography variant="button" color="text">
              I will be the leader of a company that ends up being worth billions of dollars,
              because I got the answers. I understand culture. I am the nucleus. I think that&apos;s
              a responsibility that I have, to push possibilities, to show people, this is the level
              that things could be at.
            </DIPTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <DIPTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Tiny
            </DIPTypography>
          </Grid>

          <Grid item xs={12} sm={9} lineHeight={1}>
            <DIPTypography variant="caption" color="text">
              I will be the leader of a company that ends up being worth billions of dollars,
              because I got the answers. I understand culture. I am the nucleus. I think that&apos;s
              a responsibility that I have, to push possibilities, to show people, this is the level
              that things could be at.
            </DIPTypography>
          </Grid>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default Typography;`;

export default typographyCode;
