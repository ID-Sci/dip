
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-flatpickr components
import Flatpickr from "react-flatpickr";

// react-flatpickr styles
import "flatpickr/dist/flatpickr.css";


import DIPInput from "components/DIPInput";

function DIPDatePicker({ input, ...rest }) {
  return (
    <Flatpickr
      {...rest}
      render={({ defaultValue }, ref) => (
        <DIPInput {...input} defaultValue={defaultValue} inputRef={ref} />
      )}
    />
  );
}

// Setting default values for the props of DIPDatePicker
DIPDatePicker.defaultProps = {
  input: {},
};

// Typechecking props for the DIPDatePicker
DIPDatePicker.propTypes = {
  input: PropTypes.objectOf(PropTypes.any),
};

export default DIPDatePicker;
