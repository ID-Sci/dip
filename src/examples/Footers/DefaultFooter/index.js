

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


import DIPBox from "components/DIPBox";
import DIPTypography from "components/DIPTypography";

function DefaultFooter({ content }) {
  const { brand, socials, menus, copyright } = content;

  return (
    <DIPBox component="footer">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} sx={{ ml: "auto", mb: 3 }}>
            <DIPBox>
              <Link to={brand.route}>
                <DIPBox component="img" src={brand.image} alt={brand.name} maxWidth="2rem" mb={2} />
              </Link>
              <DIPTypography variant="h6">{brand.name}</DIPTypography>
            </DIPBox>
            <DIPBox display="flex" alignItems="center" mt={3}>
              {socials.map(({ icon, link }, key) => (
                <DIPTypography
                  key={link}
                  component="a"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color="dark"
                  opacity={0.8}
                  mr={key === socials.length - 1 ? 0 : 2.5}
                >
                  {icon}
                </DIPTypography>
              ))}
            </DIPBox>
          </Grid>
          {menus.map(({ name: title, items }) => (
            <Grid key={title} item xs={6} md={2} sx={{ mb: 3 }}>
              <DIPTypography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                mb={1}
              >
                {title}
              </DIPTypography>
              <DIPBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                {items.map(({ name, route, href }) => (
                  <DIPBox key={name} component="li" p={0} m={0} lineHeight={1.25}>
                    {href ? (
                      <DIPTypography
                        component="a"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {name}
                      </DIPTypography>
                    ) : (
                      <DIPTypography
                        component={Link}
                        to={route}
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {name}
                      </DIPTypography>
                    )}
                  </DIPBox>
                ))}
              </DIPBox>
            </Grid>
          ))}
          <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
            {copyright}
          </Grid>
        </Grid>
      </Container>
    </DIPBox>
  );
}

// Typechecking props for the DefaultFooter
DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default DefaultFooter;
