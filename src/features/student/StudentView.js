import {LABEL} from "../../app/constants";
import AppButton from "../../components/AppButton";

const StudentView = props => {
    const {handleNameChange, handleSubmit, handleAddAgeClick, nameValue, student} = props;
    return (
        <>
            <label htmlFor='name'>
                {LABEL["Name.label"].value}:
            </label>
            <input id='name' type="text" value={nameValue} onChange={handleNameChange}/>
            <AppButton handleClick={handleSubmit} label={LABEL["ChangeName.label"].value}/>
            <div>
                <AppButton handleClick={handleAddAgeClick} label={LABEL["AddAge.label"].value}/>
            </div>
            <div>{student.name} {student.age}</div>
        </>
    )
}
export default StudentView;
