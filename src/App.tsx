import React, { useState } from "react";

function App() {
    const [repositories, setRepositories] = useState([
        { id: 1, name: "repo-teste-1" },
        { id: 2, name: "repo-teste-2" },
        { id: 3, name: "repo-teste-3" },
    ]);

    function handleAddRepository() {
        const idN = Math.random();
        setRepositories([
            ...repositories,
            { id: idN, name: "novo-repo-"+idN }
        ]);
    }

    return (
        <>
            <ul>
                {repositories.map((repo) => (
                    <li key={repo.id}>{repo.name}</li>
                ))}
            </ul>
            <button onClick={handleAddRepository}>Add Repository</button>
        </>
    );
}

export default App;
