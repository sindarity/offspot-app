"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IconArrowLeft, IconLeaf, IconBolt, IconClockOff, IconPencil, IconPlayerPlay } from '@tabler/icons-react';

export default function InterviewSetupPage({ params }) {
  const router = useRouter();
  const [selectedPace, setSelectedPace] = useState('Relaxed');

  const startInterview = () => {
    // Save preferences to pass to the next screen
    localStorage.setItem('offspot_pace', selectedPace);
    router.push(`/apply/${params.jobId}/interview`);
  };

  return (
    <div className="screen active">
      <div className="nav-bar">
        <Link href="/jobs" className="back-btn" style={{ textDecoration: 'none' }}>
          <IconArrowLeft size={18} /> Back
        </Link>
        <span className="nav-title">Interview setup</span>
        <span style={{ width: 60 }}></span>
      </div>
      <div className="page">
        <p className="section-label">Choose your pace</p>
        <div className="time-options">
          
          <div 
            className={`time-card ${selectedPace === 'Relaxed' ? 'selected' : ''}`} 
            onClick={() => setSelectedPace('Relaxed')}
          >
            <IconLeaf size={22} style={{ margin: '0 auto 6px', color: selectedPace === 'Relaxed' ? '#0F6E56' : 'var(--color-text-secondary)' }} />
            <h4>Relaxed</h4>
            <p>5 min per question, unlimited re-records</p>
          </div>

          <div 
            className={`time-card ${selectedPace === 'Standard' ? 'selected' : ''}`} 
            onClick={() => setSelectedPace('Standard')}
          >
            <IconBolt size={22} style={{ margin: '0 auto 6px', color: selectedPace === 'Standard' ? '#0F6E56' : 'var(--color-text-secondary)' }} />
            <h4>Standard</h4>
            <p>3 min per question, 2 re-records</p>
          </div>

          <div 
            className={`time-card ${selectedPace === 'No time limit' ? 'selected' : ''}`} 
            onClick={() => setSelectedPace('No time limit')}
          >
            <IconClockOff size={22} style={{ margin: '0 auto 6px', color: selectedPace === 'No time limit' ? '#0F6E56' : 'var(--color-text-secondary)' }} />
            <h4>No time limit</h4>
            <p>Take as long as you need</p>
          </div>

          <div 
            className={`time-card ${selectedPace === 'Written only' ? 'selected' : ''}`} 
            onClick={() => setSelectedPace('Written only')}
          >
            <IconPencil size={22} style={{ margin: '0 auto 6px', color: selectedPace === 'Written only' ? '#0F6E56' : 'var(--color-text-secondary)' }} />
            <h4>Written only</h4>
            <p>Type your answers instead of video</p>
          </div>

        </div>

        <p className="section-label">Accessibility</p>
        <div className="card" style={{ padding: '1rem 1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ fontSize: 13, color: 'var(--color-text-primary)' }}>Live captions</span>
            <span className="badge badge-green">On</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ fontSize: 13, color: 'var(--color-text-primary)' }}>Read questions aloud</span>
            <span className="badge badge-green">On</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 13, color: 'var(--color-text-primary)' }}>Low-stimulation mode</span>
            <span className="badge badge-green">On</span>
          </div>
        </div>
        
        <div className="divider"></div>
        
        <button className="btn-primary" onClick={startInterview}>
          <IconPlayerPlay size={18} /> Start interview
        </button>
      </div>
    </div>
  );
}
