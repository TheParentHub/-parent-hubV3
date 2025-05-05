import { useState, useEffect } from 'react';

export default function MyBookings() {
  const [bookings, setBookings] = useState([
    { id: 1, childName: 'Ellie', location: 'Mechanicsburg', time: '2025-05-08T09:00' },
    { id: 2, childName: 'Max', location: 'Camp Hill', time: '2025-05-09T13:30' }
  ]);

  return (
    <div className="min-h-screen bg-[#FAEFE6] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-[#2D4A4E] mb-6 text-center">My Bookings</h2>

        {bookings.length === 0 ? (
          <p className="text-[#2D4A4E] text-center">You have no bookings yet.</p>
        ) : (
          <div className="space-y-4">
            {bookings.map(booking => (
              <div
                key={booking.id}
                className="bg-[#FDEDEB] border border-gray-200 rounded-xl shadow-sm p-6"
              >
                <p className="text-[#2D4A4E] font-medium">
                  <strong>Child:</strong> {booking.childName}
                </p>
                <p className="text-[#2D4A4E] font-medium">
                  <strong>Location:</strong> {booking.location}
                </p>
                <p className="text-[#2D4A4E] font-medium">
                  <strong>Time:</strong> {new Date(booking.time).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}