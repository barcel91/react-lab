import logo from './logo.svg';
import './App.css';
import "milligram";
import LoginForm from "./LoginForm";
import {useState} from "react";
import UserPanel from "./UserPanel";


function App() {
    const [loggedInUsername, setIsLoggedInUsername] = useState(null);

    return (
        <div className="container">
            <h1>System do zapisów na zajęcia</h1>
            {
                loggedInUsername
                ? <UserPanel email={loggedInUsername}
                             onLogout={() => setIsLoggedInUsername(null)} />
                : <LoginForm onLogin={(email) => setIsLoggedInUsername(email)} /> }
        </div>
    );
}

export default App;
