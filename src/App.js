import logo from './logo.svg';
import './App.css';

import {useState} from "react";

function App() {
    const [email, setEmail] = useState('barcel@buziaczek.pl');

    function handleChange(event) {
        setEmail(event.target.value);
    }

    let validationMessage = '';

       if (email.length < 5) {
            validationMessage = 'Ale masz małego maila';
        } else if (email.length < 15) {
            validationMessage = 'Masz spoko maila';
        } else {
            validationMessage = 'Masz za długiego maila';
        }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email}.</h2>
            <input type="text" value={email} onChange={handleChange}/>
            {email.length > 0  && <div> Błąd: {validationMessage}</div>}
        </div>
    );
}

export default App;
