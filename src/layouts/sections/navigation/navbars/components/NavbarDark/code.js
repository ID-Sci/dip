const navbarDarkCode = `
import DIPBox from "components/DIPBox";


import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

function NavbarDark() {
  return (
    <DIPBox variant="gradient" bgColor="dark" shadow="sm" py={0.25}>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        transparent
        relative
        light
        center
      />
    </DIPBox>
  );
}

export default NavbarDark;`;

export default navbarDarkCode;
