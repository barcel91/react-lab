import logo from './logo.svg';
import './App.css';
import "milligram";

import {useState} from "react";

function App() {
    const [email, setEmail] = useState('barcel@buziaczek.pl');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            { !isLoggedIn && <div>
            <p> Zaloguj się mailem </p>
                <input type="text" onChange={(event) => setEmail(event.target.value)}/>

                <button type="button" onClick={() => setIsLoggedIn(true)}> Zaloguj się </button>
                </div>}

                { isLoggedIn && <div>

                <h2>Witaj {email} !</h2>

                <a onClick={() => setIsLoggedIn(false)}> Wyloguj </a>
                </div>}

        </div>
    );
}

export default App;
