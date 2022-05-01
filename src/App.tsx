import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function App() {
    const [repositories, setRepositories] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios(
                "https://api.github.com/users/GuilhermeDeOliveiraAmorim/repos"
            );
            setRepositories(response.data);
        };
        fetchData();
    }, []);
    
    function handleFavorite(id: number) {
        const newRepositories = repositories.map(repo => {
            return repo.id === id ? {...repo, favorite: true} : repo
        });
        setRepositories(newRepositories);
    }

    return (
        <ul>
            {repositories.map((repo) => (
                <li key={repo.id}>
                    {repo.name}{repo.favorite && <span> (Favorite)</span>}
                    <button onClick={() => handleFavorite(repo.id)}>
                        Add
                    </button>
                </li>
            ))}
        </ul>
    );
}
