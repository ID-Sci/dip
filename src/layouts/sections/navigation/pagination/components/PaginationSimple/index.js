/* eslint-disable no-param-reassign */


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";


import DIPPagination from "components/DIPPagination";

function PaginationSimple() {
  return (
    <Container sx={{ height: "100%" }}>
      <Grid container item justifyContent="center" xs={12} lg={6} mx="auto" height="100%">
        <DIPPagination>
          <DIPPagination item>
            <Icon>keyboard_arrow_left</Icon>
          </DIPPagination>
          <DIPPagination item active>
            1
          </DIPPagination>
          <DIPPagination item>2</DIPPagination>
          <DIPPagination item>3</DIPPagination>
          <DIPPagination item>4</DIPPagination>
          <DIPPagination item>5</DIPPagination>
          <DIPPagination item>
            <Icon>keyboard_arrow_right</Icon>
          </DIPPagination>
        </DIPPagination>
      </Grid>
    </Container>
  );
}

export default PaginationSimple;
