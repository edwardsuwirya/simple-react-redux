import PropTypes from "prop-types";

const AppButton = props => {
    const {handleClick, label} = props;
    return <button onClick={handleClick}>{label}</button>
}
AppButton.propTypes = {
    label: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
}
export default AppButton;
