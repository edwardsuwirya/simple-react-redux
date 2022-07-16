import StudentPage from "./features/student/StudentPage";
import StudentView from "./features/student/StudentView";

function App() {
    return (
        <>
            <StudentPage view={StudentView}/>
        </>
    );
}

export default App;
