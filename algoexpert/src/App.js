import React, {useState} from "react";
import Profile from "./Profile";
import {UserContext} from "./UserContext";

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
            <UserContext.Provider
                value={user}>
                <Profile/>
            </UserContext.Provider>

            <button onClick={toggleUser}>Toggle User</button>
        </main>
    );
}

