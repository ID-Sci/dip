


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";


import DIPBox from "components/DIPBox";


import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <DIPBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={5}
              suffix=""
              title="ชนิดพืช"
              description="จำนวนพืชที่รองรับการตรวจสอบ"
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={24}
              suffix=""
              title="โรคจากชนิดพืช"
              description="จำนวนชนิดโรคทั้งหมดที่ระบบสามารถระบุได้"
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={1}
              title="V."
              description="โมเดลต้นแบบเพื่อการนำไปพัฒนาต่อยอดในอนาคต"
            />
          </Grid>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default Counters;
