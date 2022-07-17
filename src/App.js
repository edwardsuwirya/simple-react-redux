import StudentPage from "./features/student/StudentPage";
import StudentView from "./features/student/StudentView";
import StudentBookView from "./features/studentBook/StudentBookView";
import StudentBookPage from "./features/studentBook/StudentBookPage";

function App() {
    return (
        <>
            <StudentPage view={props => (
                <StudentView {...props}/>
            )}/>
            <StudentBookPage view={props => (
                <StudentBookView {...props}/>
            )
            }/>
        </>
    );
}

export default App;
