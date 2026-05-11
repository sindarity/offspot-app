"use client";

import Link from 'next/link';
import { IconCheck, IconEyeOff, IconBell, IconBuilding } from '@tabler/icons-react';

export default function DonePage() {
  return (
    <div className="screen active">
      <div className="page" style={{ textAlign: 'center', paddingTop: '3rem' }}>
        <div className="success-icon" style={{ width: 72, height: 72, borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
          <IconCheck size={36} color="#0F6E56" />
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 500, marginBottom: '0.5rem' }}>You did it</h1>
        <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
          Your application is with GreenLeaf Co. They'll review your answers in their own time — no rushing on either side.
        </p>
        
        <div className="stat-row">
          <div className="stat-box">
            <div className="num">2</div>
            <div className="lbl">Answers submitted</div>
          </div>
          <div className="stat-box">
            <div className="num">∞</div>
            <div className="lbl">Time limit</div>
          </div>
          <div className="stat-box">
            <div className="num">✓</div>
            <div className="lbl">Blind Review</div>
          </div>
        </div>
        
        <div className="divider"></div>
        
        <p className="section-label" style={{ textAlign: 'left' }}>What happens next</p>
        
        <div className="card" style={{ textAlign: 'left' }}>
          <div className="card-header">
            <div className="card-icon">
              <IconEyeOff size={18} color="#0F6E56" />
            </div>
            <div>
              <h3>Blind review</h3>
            </div>
          </div>
          <p>The employer sees your answers first. Name and photo are hidden until they choose to proceed.</p>
        </div>
        
        <div className="card" style={{ textAlign: 'left' }}>
          <div className="card-header">
            <div className="card-icon">
              <IconBell size={18} color="#0F6E56" />
            </div>
            <div>
              <h3>You'll hear back within 5 days</h3>
            </div>
          </div>
          <p>OffSpot holds employers to a response commitment — no ghosting allowed.</p>
        </div>
        
        <div style={{ marginTop: '1.5rem' }}>
          <Link href="/employer/dashboard" className="btn-secondary" style={{ textDecoration: 'none' }}>
            <IconBuilding size={18} /> See the employer view
          </Link>
        </div>
      </div>
    </div>
  );
}
