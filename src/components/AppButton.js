const AppButton = props => {
    const {handleClick, label} = props;
    return <button onClick={handleClick}>{label}</button>
}

export default AppButton;
