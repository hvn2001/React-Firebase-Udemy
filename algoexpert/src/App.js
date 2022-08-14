import React, {useState} from "react";
import Profile from "./Profile";

const conner = {
    name: 'Conner',
    course: 'FrontendExpert'
}
const clement = {
    name: 'Clement',
    course: 'AlgoExpert'
}


export default function App() {
    const [user, setUser] = useState(conner)

    const toggleUser = () => {
        if (user === conner) {
            setUser(clement);
        } else {
            setUser(conner);
        }
    }
    return (
        <main>
            <Profile user={user}/>
            <button onClick={toggleUser}>Toggle User</button>
        </main>
    );
}

