import React, { useState, useEffect } from 'react';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/post/"); // No need to specify GET, it's the default
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`); // Handle non-2xx responses
                }
                const data = await response.json(); // Await the json() promise
                setPosts(data);
            } catch (err) {
                setError(err);
                console.error("Error fetching posts:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}

export default Posts;