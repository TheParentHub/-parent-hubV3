import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export default function CaregiverApply() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    certifications: '',
    availability: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "caregiver_applications"), {
        ...form,
        createdAt: Timestamp.now(),
        status: "Pending"
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAEFE6] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-[#FDEDEB] p-8 rounded-2xl shadow-md">
        {!submitted ? (
          <>
            <h1 className="text-3xl font-bold text-[#2D4A4E] mb-6 text-center">
              Apply to Join Our Care Team
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              {['name', 'email', 'phone'].map((field) => (
                <div key={field}>
                  <label className="block mb-1 text-sm font-medium text-[#2D4A4E] capitalize">
                    {field}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    required
                    value={form[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                  />
                </div>
              ))}

              {['experience', 'certifications', 'availability'].map((field) => (
                <div key={field}>
                  <label className="block mb-1 text-sm font-medium text-[#2D4A4E] capitalize">
                    {field}
                  </label>
                  <textarea
                    rows="3"
                    name={field}
                    required
                    value={form[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                  ></textarea>
                </div>
              ))}

              <button type="submit" className="w-full bg-[#F3C370] text-[#2D4A4E] py-3 rounded-full font-semibold hover:bg-[#e4b352] transition">
                Submit Application
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#2D4A4E] mb-4">Thank you!</h2>
            <p className="text-[#2D4A4E]">Your application has been received. A member of our team will review it soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}