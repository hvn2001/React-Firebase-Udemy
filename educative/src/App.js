import React from 'react';

const list = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        points: 50,
    },
];

function App() {
    return (
        <div>
            <h1>My Hacker Stories</h1>

            <label htmlFor="search">Search: </label>
            <input id="search" type="text"/>

            <hr/>

            {list.map(function (item) {
                return (
                    <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
