

// prop-types is library for typechecking of props
import PropTypes from "prop-types";


import Icon from "@mui/material/Icon";


import DIPBox from "components/DIPBox";
import DIPAvatar from "components/DIPAvatar";
import DIPTypography from "components/DIPTypography";

function DefaultReviewCard({ color, image, name, date, review, rating }) {
  const ratings = {
    0.5: [
      <Icon key={1}>star_outline</Icon>,
      <Icon key={2}>star_outline</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    1: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star_outline</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    1.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star_half</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    2: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    2.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star_half</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    3: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    3.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star_half</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    4: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    4.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star_half</Icon>,
    ],
    5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star</Icon>,
    ],
  };

  return (
    <DIPBox
      variant={color === "transparent" ? "contained" : "gradient"}
      bgColor={color}
      borderRadius="xl"
      shadow={color === "transparent" ? "none" : "md"}
      p={3}
    >
      {image && (
        <DIPAvatar
          src={image}
          alt={name}
          variant="rounded"
          size="lg"
          shadow="md"
          sx={{ mt: -5, mb: 1 }}
        />
      )}
      <DIPBox lineHeight={1}>
        <DIPTypography
          display="block"
          variant={image ? "button" : "h6"}
          fontWeight="bold"
          color={color === "transparent" || color === "light" ? "dark" : "white"}
          mb={0.5}
        >
          {name}
        </DIPTypography>
        <DIPTypography
          variant={image ? "caption" : "button"}
          fontWeight="regular"
          lineHeight={1}
          color={color === "transparent" || color === "light" ? "text" : "white"}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Icon>schedule</Icon>&nbsp;
          {date}
        </DIPTypography>
      </DIPBox>
      <DIPTypography
        variant="body2"
        color={color === "transparent" || color === "light" ? "text" : "white"}
        my={4}
      >
        &quot;{review}&quot;
      </DIPTypography>
      <DIPTypography
        variant="h4"
        color={color === "transparent" || color === "light" ? "text" : "white"}
        sx={{
          display: "flex",
          alignItems: "center",
          ml: 0.375,

          "& .material-icons-round": {
            ml: -0.375,
          },
        }}
      >
        {ratings[rating]}
      </DIPTypography>
    </DIPBox>
  );
}

// Setting default values for the props of DefaultReviewCard
DefaultReviewCard.defaultProps = {
  color: "transparent",
  image: "",
};

// Typechecking props for the DefaultReviewCard
DefaultReviewCard.propTypes = {
  color: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  rating: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
};

export default DefaultReviewCard;
