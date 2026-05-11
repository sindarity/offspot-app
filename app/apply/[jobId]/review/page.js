"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IconArrowLeft, IconCheck, IconSend } from '@tabler/icons-react';

export default function ReviewPage({ params }) {
  const router = useRouter();
  const [answers, setAnswers] = useState({ q1: '', q2: '' });
  const [extraInfo, setExtraInfo] = useState({ portfolio: '', note: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedAnswers = localStorage.getItem('offspot_answers');
    if (savedAnswers) {
      try {
        setAnswers(JSON.parse(savedAnswers));
      } catch (e) {}
    }
  }, []);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Build the payload
    const pace = localStorage.getItem('offspot_pace') || 'Relaxed';
    const payload = {
      Applicant_ID: 'app-' + Math.random().toString(36).substr(2, 9),
      Job_ID: params.jobId,
      Name: 'Anonymous Candidate',
      Email: 'candidate@example.com',
      Pace_Chosen: pace,
      Mode: pace === 'Written only' ? 'Written' : 'Video',
      Video_Q1_Link: answers.q1,
      Video_Q2_Link: answers.q2,
      Portfolio_URL: extraInfo.portfolio,
      Applicant_Note: extraInfo.note,
      Status: 'Awaiting review',
      Shortlisted: 'FALSE',
      Name_Revealed: 'FALSE',
      Submitted_At: new Date().toISOString()
    };

    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbwOC_cME8k8vAdPzLhVxveloM_-1V1QjorR-YywT9pC-x1Y8M_zzBY9t7zJLxhBTTs_/exec';
      
      // Submit to Google Sheets via Apps Script using no-cors
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(payload)
      });
      
      console.log('Submission sent successfully');
      
      // Keep payload in local storage to show on employer dashboard mockup
      const existing = JSON.parse(localStorage.getItem('offspot_mock_applicants') || '[]');
      existing.push(payload);
      localStorage.setItem('offspot_mock_applicants', JSON.stringify(existing));

      router.push(`/apply/${params.jobId}/done`);
    } catch (e) {
      console.error('Error submitting application:', e);
      setIsSubmitting(false);
      alert("There was an error submitting your application. Please try again.");
    }
  };

  return (
    <div className="screen active">
      <div className="nav-bar">
        <Link href={`/apply/${params.jobId}/interview`} className="back-btn" style={{ textDecoration: 'none' }}>
          <IconArrowLeft size={18} /> Back
        </Link>
        <span className="nav-title">Review & submit</span>
        <span style={{ width: 60 }}></span>
      </div>
      <div className="page">
        
        <p className="section-label">Your answers</p>
        <div className="card" style={{ padding: '0 1.25rem' }}>
          <div className="review-item">
            <span>Q1 — About yourself</span>
            {answers.q1 ? (
              <span className="badge badge-green"><IconCheck size={12} /> Recorded</span>
            ) : (
              <span className="badge badge-amber">Pending</span>
            )}
          </div>
          <div className="review-item" style={{ borderBottom: 'none' }}>
            <span>Q2 — Helping others</span>
            {answers.q2 ? (
              <span className="badge badge-green"><IconCheck size={12} /> Recorded</span>
            ) : (
              <span className="badge badge-amber">Pending</span>
            )}
          </div>
        </div>
        
        <div className="divider"></div>
        
        <p className="section-label">Optional — share more</p>
        <label className="form-label">Portfolio link or any supporting URL</label>
        <input 
          type="text" 
          placeholder="https://..." 
          value={extraInfo.portfolio}
          onChange={e => setExtraInfo({...extraInfo, portfolio: e.target.value})}
        />
        
        <label className="form-label">Anything you'd like the employer to know</label>
        <textarea 
          rows="3" 
          placeholder="E.g. preferred contact method, any accommodations needed for next steps..."
          value={extraInfo.note}
          onChange={e => setExtraInfo({...extraInfo, note: e.target.value})}
        ></textarea>
        
        <div className="divider"></div>
        
        <button className="btn-primary" onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : <><IconSend size={18} /> Submit application</>}
        </button>
      </div>
    </div>
  );
}
