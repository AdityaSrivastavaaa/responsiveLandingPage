import React, { useEffect, useState, useRef } from 'react';
import { fetchUsers } from '../utils/api';
import { Trie } from '../utils/trie';
import { debounce } from '../utils/debounce';

export default function UserSearch() {
    const [users, setUsers] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);

    const trieRef = useRef(new Trie());

    // Fetch and build Trie on component mount
    useEffect(() => {
        const loadUsers = async () => {
            const data = await fetchUsers();
            setUsers(data);

            // Insert lowercase names into Trie for case-insensitivity
            data.forEach(user => trieRef.current.insert(user.name.toLowerCase()));

            setSearchResults(data); // Initially show all users
            setLoading(false);
        };

        loadUsers();
    }, []);

    // Debounced Search Logic
    const handleSearch = debounce((query) => {
        if (query.trim() === '') {
            setSearchResults(users);
        } else {
            const filteredNames = trieRef.current.search(query.toLowerCase());
            const filteredUsers = users.filter(user =>
                filteredNames.includes(user.name.toLowerCase())  // Ensure comparison is case-insensitive
            );
            setSearchResults(filteredUsers);
        }
    }, 300);

    useEffect(() => {
        handleSearch(searchQuery);
    }, [searchQuery, users]);

    if (loading) {
        return <div className="text-center text-blue-500 text-xl mt-10">Loading users...</div>;
    }

    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold text-center text-blue-500 mb-6">Search Users</h1>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 border border-blue-400 rounded-lg mb-6 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Display Search Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map(user => (
                    <div 
                        key={user.id} 
                        className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-blue-500 hover:scale-105 transition-transform duration-300"
                    >
                        <h2 className="text-xl font-bold text-blue-600">{user.name}</h2>
                        <p className="text-gray-500">{user.email}</p>
                        <p className="text-sm text-gray-400">{user.company.name}</p>
                        <div className="mt-4">
                            <p className="text-sm"><strong>City:</strong> {user.address.city}</p>
                            <p className="text-sm"><strong>Phone:</strong> {user.phone}</p>
                            <p className="text-sm"><strong>Website:</strong> 
                                <a 
                                    href={`https://${user.website}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    {` ${user.website}`}
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* No Results Found */}
            {searchResults.length === 0 && (
                <div className="text-center text-red-500 text-lg mt-4">
                    No users found.
                </div>
            )}
        </div>
    );
}
