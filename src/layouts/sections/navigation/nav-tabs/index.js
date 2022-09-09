


import DIPBox from "components/DIPBox";

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Stats page components
import TabsSimple from "layouts/sections/navigation/nav-tabs/components/TabsSimple";

// Stats page components code
import tabsSimpleCode from "layouts/sections/navigation/nav-tabs/components/TabsSimple/code";

function NavTabs() {
  return (
    <BaseLayout
      title="Nav Tabs"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/nav-tabs" },
        { label: "Nav Tabs" },
      ]}
    >
      <View title="Tabs simple" code={tabsSimpleCode}>
        <DIPBox bgColor="white" py={6}>
          <TabsSimple />
        </DIPBox>
      </View>
    </BaseLayout>
  );
}

export default NavTabs;
