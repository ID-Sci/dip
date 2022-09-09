


import DIPBox from "components/DIPBox";

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Stats page components
import NavbarDark from "layouts/sections/navigation/navbars/components/NavbarDark";

// Stats page components code
import navbarDarkCode from "layouts/sections/navigation/navbars/components/NavbarDark/code";

function Navbars() {
  return (
    <BaseLayout
      title="Navbars"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/navbars" },
        { label: "Navbars" },
      ]}
    >
      <View title="Navbar dark" code={navbarDarkCode}>
        <DIPBox py={6}>
          <NavbarDark />
        </DIPBox>
      </View>
    </BaseLayout>
  );
}

export default Navbars;
