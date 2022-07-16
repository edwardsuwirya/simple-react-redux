import StudentPage from "./features/student/StudentPage";
import StudentView from "./features/student/StudentView";
import StudentBookView from "./features/studentBook/StudentBookView";
import StudentBookPage from "./features/studentBook/StudentBookPage";

function App() {
    return (
        <>
            <StudentPage view={StudentView}/>
            <StudentBookPage view={StudentBookView}/>
        </>
    );
}

export default App;
