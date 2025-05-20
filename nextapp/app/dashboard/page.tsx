import client from "@/db";

async function getAllUsers() {
  try {
    return await client.user.findMany({
      select: {
        email: true  // Only fetch the email field for better performance
      },
      orderBy: {
        email: 'asc'  // Consistent ordering
      }
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];  // Return empty array instead of undefined on error
  }
}

export default async function Home() {
  const users = await getAllUsers();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded max-w-md w-full">
          <h2 className="text-xl font-bold mb-4">User Emails</h2>
          
          {users.length > 0 ? (
            <ul className="space-y-2">
              {users.map((user) => (
                <li key={user.email} className="p-2 bg-gray-50 rounded">
                  {user.email}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No users found</p>
          )}
        </div>
      </div>
    </div>
  );
}