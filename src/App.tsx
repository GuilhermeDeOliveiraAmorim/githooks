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

    return (
        <ul>
            {repositories.map((repo) => (
                <li key={repo.id}>{repo.name}</li>
            ))}
        </ul>
    );
}
