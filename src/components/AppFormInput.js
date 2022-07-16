const AppFormInput = props => {
    const {id, label, value, onValueChange} = props;
    return (
        <>
            <label htmlFor={id}>
                {label}
            </label>
            <input id={id} type="text" value={value} onChange={onValueChange}/>
        </>
    )
}

export default AppFormInput;
