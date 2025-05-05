export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAEFE6] flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl text-center relative">
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#F3C370] rounded-full opacity-40 translate-x-1/3 -translate-y-1/3 z-0"></div>
        <div className="absolute bottom-0 left-0 w-44 h-56 bg-[#B5C7B7] rounded-tl-full rounded-tr-full opacity-30 -translate-x-1/4 translate-y-1/4 z-0"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D4A4E] mb-6 leading-tight">
            WHERE MODERN PARENTING MEETS<br />REAL-LIFE FLEXIBILITY
          </h1>
          <p className="text-[#2D4A4E] text-lg md:text-xl mb-10 font-medium">
            Drop-off care. Onsite support. Flexible workspaces. Real community.
          </p>
          <a href="/login" className="inline-block bg-[#F3C370] text-[#2D4A4E] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#e4b352] transition">
            Get Started
          </a>
        </div>
        <div className="mt-16 relative z-10">
          <div className="flex justify-center mb-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#F3C370] to-[#B5C7B7] opacity-80"></div>
          </div>
          <p className="text-[#2D4A4E] text-lg font-bold tracking-wide">THE PARENT HUB</p>
        </div>
      </div>
    </div>
  );
}