import AppButton from "../../components/AppButton";

const StudentBookView = (props) => {
    const {handleAddBook, handleSubmitStudentBook, student, newBookValue, handleNewBookChange} = props;
    return (
        <>
            <div>{student.name}</div>
            <input id='book' type="text" value={newBookValue} onChange={handleNewBookChange}/>
            <AppButton handleClick={handleAddBook} label={'Add Book'}/>
            <AppButton handleClick={handleSubmitStudentBook} label={'Submit Student Book'}/>
        </>
    )
}
export default StudentBookView;

