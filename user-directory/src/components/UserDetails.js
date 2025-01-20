import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!user) {
    return <p className="text-center mt-6">Loading...</p>;
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-800 p-6 flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 dark:text-gray-200 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Company:</strong> {user.company.name}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    </main>
  );
}

export default UserDetails;
