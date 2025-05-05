import { useRouter } from 'next/router';

export default function ThankYou() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#FAEFE6] flex flex-col items-center justify-center px-6 py-12 text-center">
      <div className="bg-[#FDEDEB] p-10 rounded-2xl shadow-md max-w-md">
        <h1 className="text-3xl font-bold text-[#2D4A4E] mb-4">Thank You for Booking!</h1>
        <p className="text-[#2D4A4E] mb-6">
          Your care request has been submitted successfully. We’ll confirm your booking shortly.
        </p>
        <button
          onClick={() => router.push('/dashboard')}
          className="bg-[#F3C370] text-[#2D4A4E] px-6 py-3 rounded-full font-semibold hover:bg-[#e4b352] transition"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}