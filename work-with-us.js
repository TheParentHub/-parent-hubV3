export default function WorkWithUs() {
  return (
    <div className="min-h-screen bg-[#FAEFE6] flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl text-center relative">
        {/* Geometric background shapes */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#B5C7B7] rounded-full opacity-30 -translate-x-1/3 -translate-y-1/3 z-0"></div>
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-[#F3C370] rounded-full opacity-30 translate-x-1/4 translate-y-1/4 z-0"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D4A4E] mb-6 leading-tight">
            Love Kids? Build Your Own Schedule.
          </h1>
          <p className="text-[#2D4A4E] text-lg md:text-xl mb-6">
            The Parent Hub is redefining how care works — for families and for caregivers.
            Join our flexible, vetted, and mission-driven network of child care providers.
          </p>

          <div className="text-left bg-white p-6 rounded-xl shadow-md mb-8">
            <h2 className="text-xl font-semibold text-[#2D4A4E] mb-4">How It Works:</h2>
            <ul className="text-[#2D4A4E] space-y-2 list-disc list-inside">
              <li>Apply to join our Care Network</li>
              <li>Submit your clearances and certifications</li>
              <li>Get matched with shifts near you — when it fits your schedule</li>
              <li>Make an impact in your local community</li>
            </ul>
          </div>

          <a
            href="/caregiver-apply"
            className="inline-block bg-[#F3C370] text-[#2D4A4E] px-8 py-4 rounded-full font-semibold hover:bg-[#e4b352] transition"
          >
            Apply to Join Our Care Team
          </a>

          <p className="mt-6 text-sm text-[#2D4A4E]">
            Questions? Reach out to <a href="mailto:team@myparenthub.com" className="underline font-medium">team@myparenthub.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}