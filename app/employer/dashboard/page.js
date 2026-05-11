"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IconArrowLeft, IconPlayerPlay, IconX, IconUser } from '@tabler/icons-react';

export default function EmployerDashboard() {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    // Load mock applicants
    const mock = localStorage.getItem('offspot_mock_applicants');
    if (mock) {
      try {
        setApplicants(JSON.parse(mock));
      } catch (e) {}
    }
  }, []);

  const handleShortlist = (index) => {
    const updated = [...applicants];
    updated[index].Status = 'Shortlisted';
    updated[index].Name_Revealed = 'TRUE';
    setApplicants(updated);
    localStorage.setItem('offspot_mock_applicants', JSON.stringify(updated));
  };

  const handlePass = (index) => {
    const updated = [...applicants];
    updated[index].Status = 'Passed';
    setApplicants(updated);
    localStorage.setItem('offspot_mock_applicants', JSON.stringify(updated));
  };

  return (
    <div className="screen active">
      <div className="nav-bar">
        <Link href="/" className="back-btn" style={{ textDecoration: 'none' }}>
          <IconArrowLeft size={18} /> Home
        </Link>
        <span className="nav-title">Employer dashboard</span>
        <span style={{ width: 60 }}></span>
      </div>
      <div className="page">
        <p className="section-label">Applicants — Customer Support Specialist</p>
        
        {applicants.filter(a => a.Status !== 'Passed').length === 0 ? (
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>No applicants yet. Try submitting an application first.</p>
        ) : null}

        {applicants.filter(a => a.Status !== 'Passed').map((app, index) => (
          <div className="card" key={index}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <strong style={{ fontSize: 14 }}>
                {app.Name_Revealed === 'TRUE' ? app.Name : `Applicant #${index + 1}`}
              </strong>
              <span className={`badge ${app.Status === 'Shortlisted' ? 'badge-green' : 'badge-blue'}`}>
                {app.Status}
              </span>
            </div>
            
            {app.Name_Revealed === 'TRUE' && (
              <p style={{ fontSize: 13, color: 'var(--color-text-primary)', marginBottom: 8 }}>
                <strong>Email:</strong> {app.Email}
              </p>
            )}

            <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginBottom: 10 }}>
              Submitted recently · {app.Pace_Chosen} pace · {app.Mode} mode
            </p>
            
            <div className="tag-row">
              <span className="tag">Re-records: unknown</span>
              {app.Applicant_Note && <span className="tag">Note included</span>}
              {app.Portfolio_URL && <span className="tag">Portfolio submitted</span>}
            </div>
            
            <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {app.Status === 'Awaiting review' ? (
                <>
                  <button className="btn-primary btn-sm" onClick={() => alert(app.Mode === 'Video' ? `Q1 Link: ${app.Video_Q1_Link}\nQ2 Link: ${app.Video_Q2_Link}` : `Q1 Answer: ${app.Video_Q1_Link}\nQ2 Answer: ${app.Video_Q2_Link}`)}>
                    <IconPlayerPlay size={16} /> Review Answers
                  </button>
                  <button className="btn-secondary btn-sm" onClick={() => handleShortlist(index)}>
                    Shortlist & Reveal Name
                  </button>
                  <button className="btn-secondary btn-sm" onClick={() => handlePass(index)}>
                    <IconX size={16} /> Pass
                  </button>
                </>
              ) : (
                <button className="btn-secondary btn-sm" disabled>
                  <IconUser size={16} /> Profile Revealed
                </button>
              )}
            </div>
          </div>
        ))}
        
        <div className="divider"></div>
        <p style={{ fontSize: 12, color: 'var(--color-text-tertiary)', lineHeight: 1.6 }}>
          OffSpot's blind-first model means you evaluate what candidates can do before any bias kicks in. Names, photos, and demographics are revealed only when you shortlist.
        </p>
      </div>
    </div>
  );
}
