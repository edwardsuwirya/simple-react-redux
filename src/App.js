import StudentPage from "./features/student/StudentPage";
import StudentView from "./features/student/StudentView";
import StudentBook from "./features/book/StudentBook";

function App() {
    return (
        <>
            <StudentPage view={StudentView}/>
            <StudentBook/>
        </>
    );
}

export default App;
