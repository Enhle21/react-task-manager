import { useEffect, useState } from 'react';
import Card from './Card';

function ApiData() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(setData)
        .catch(() => setError('Failed to fetch'))
        .finally(() => setLoading(false));
    }, []);

    const filteredData = data.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-600">{error}</p>;

    return (
        <div>
            <h1 className="text-2xl mb-4">API Data</h1>
            <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 mb-4 w-full"
            placeholder="Search by title..."
            />
            {filteredData.map(post => (
                <Card key={post.id}>
                    <h2 className="font-bold mb-2">{post.title}</h2>
                    <p>{post.body}</p>
                </Card>
            ))}
        </div>
    );
}
export default ApiData;