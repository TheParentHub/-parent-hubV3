import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';

export default function AdminReview() {
  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    const snapshot = await getDocs(collection(db, 'caregiver_applications'));
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setApplications(data);
  };

  const updateStatus = async (id, newStatus) => {
    const ref = doc(db, 'caregiver_applications', id);
    await updateDoc(ref, { status: newStatus });
    fetchApplications();
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAEFE6] p-6">
      <h1 className="text-3xl font-bold text-[#2D4A4E] text-center mb-8">
        Caregiver Applications
      </h1>

      <div className="space-y-6 max-w-3xl mx-auto">
        {applications.length === 0 ? (
          <p className="text-center text-[#2D4A4E]">No applications submitted yet.</p>
        ) : (
          applications.map(app => (
            <div key={app.id} className="bg-[#FDEDEB] border border-gray-300 p-6 rounded-xl shadow">
              <h2 className="text-xl font-semibold text-[#2D4A4E]">{app.name}</h2>
              <p className="text-sm text-[#2D4A4E]"><strong>Email:</strong> {app.email}</p>
              <p className="text-sm text-[#2D4A4E]"><strong>Phone:</strong> {app.phone}</p>
              <p className="text-sm text-[#2D4A4E]"><strong>Experience:</strong> {app.experience}</p>
              <p className="text-sm text-[#2D4A4E]"><strong>Certifications:</strong> {app.certifications}</p>
              <p className="text-sm text-[#2D4A4E]"><strong>Availability:</strong> {app.availability}</p>

              <div className="mt-4 flex items-center gap-4">
                <span className="text-sm text-[#2D4A4E] font-medium">Status: {app.status}</span>
                <button
                  className="bg-[#F3C370] px-4 py-2 text-sm text-[#2D4A4E] rounded-full hover:bg-[#e4b352] transition"
                  onClick={() => updateStatus(app.id, 'Approved')}
                >
                  Approve
                </button>
                <button
                  className="bg-white border border-gray-300 px-4 py-2 text-sm text-[#2D4A4E] rounded-full hover:bg-gray-100 transition"
                  onClick={() => updateStatus(app.id, 'Rejected')}
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}