


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


import DIPBox from "components/DIPBox";


import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <DIPBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    ทดลอง
                    <br />
                    ตรวจสอบโรคพืช
                  </>
                }
                description="ทดลองการใช้งาน ตรวจจสอบโรคพืช 24 โรค ในพืชตัวอย่างพืช 5 ชนิด"
              />
              <RotatingCardBack
                image={bgBack}
                title="ตรวจจสอบโรคพืช"
                description="คุณสามารถทดลองทดสอบโมเดลทดลอง"
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "เริ่มทดสอบได้เลย",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="search"
                  title="ตรวจสอบโรคพืช"
                  description="ระบบสามารถแยกโรคพืช และสามารถแยกประเภทพืชต่างๆด้วย AI"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="adb"
                  title="โรคพืช"
                  description="มีข้อมูลโรคพืชกว่า 24 ชนิด"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="medication"
                  title="ข้อมูลยา"
                  description="รายระเอียดตัวยาที่มีการอ้างอิงถึง"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="spa"
                  title="วิธีการดูแล"
                  description="การดูแลพืชที่เราต้องการ"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </DIPBox>
  );
}

export default Information;
