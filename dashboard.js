import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const mockLocations = [
  { id: 1, name: "Parent Hub - Mechanicsburg", availableSlots: 4 },
  { id: 2, name: "Parent Hub - Camp Hill", availableSlots: 2 },
];

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState({ email: 'parent@example.com' });

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-[#FAEFE6] p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#2D4A4E]">Welcome, {user.email}</h1>
          <a href="/my-bookings" className="text-sm text-[#2D4A4E] underline hover:text-[#e4b352]">
            View My Bookings
          </a>
        </div>
        <button
          onClick={handleLogout}
          className="bg-white border border-gray-300 text-[#2D4A4E] px-4 py-2 rounded-full hover:bg-gray-100 transition"
        >
          Logout
        </button>
      </div>

      <h2 className="text-lg font-semibold mb-4 text-[#2D4A4E]">Available Locations</h2>
      <div className="space-y-4">
        {mockLocations.map(location => (
          <div
            key={location.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold text-[#2D4A4E]">{location.name}</h3>
              <p className="text-sm text-gray-600">{location.availableSlots} spots available</p>
            </div>
            <a
              href={`/book?location=${location.id}`}
              className="bg-[#F3C370] text-[#2D4A4E] px-4 py-2 rounded-full font-medium hover:bg-[#e4b352] transition"
            >
              Book Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}