import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Book() {
  const router = useRouter();
  const { location } = router.query;
  const [childName, setChildName] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted! Redirecting to dashboard...');
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#FAEFE6] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-[#FDEDEB] p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-[#2D4A4E] mb-6 text-center">
          Book Care at Location {location}
        </h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-3 text-sm text-[#2D4A4E] font-medium">Child's Name</label>
          <input
            type="text"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none"
            required
          />

          <label className="block mb-3 text-sm text-[#2D4A4E] font-medium">Booking Time</label>
          <input
            type="datetime-local"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#F3C370] text-[#2D4A4E] py-3 rounded-full font-semibold hover:bg-[#e4b352] transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}