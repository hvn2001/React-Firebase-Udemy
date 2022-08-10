import React from 'react';

class Developer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        return this.firstName + ' ' + this.lastName;
    }
}


function App() {
    return (
        <div>
            <h1>My Hacker Stories</h1>

            <label htmlFor="search">Search: </label>
            <input id="search" type="text"/>

            <hr/>

            {/* creating an instance of List component */}
            <List/>
            {/* creating another instance of List component */}
            <List/>
        </div>
    );
}

// definition of List component
function List() {
    // class instantiation
    const robin = new Developer('Robin', 'Wieruch');

    // another class instantiation
    const dennis = new Developer('Dennis', 'Wieruch');

    return (
        <div>
            {robin.getName()};
            {dennis.getName()};

        </div>
    );
}

export default App;
