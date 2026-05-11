import Link from 'next/link';
import { IconAccessPoint, IconBriefcase, IconBuilding, IconClockPause, IconAdjustmentsHorizontal, IconEyeOff } from '@tabler/icons-react';
import './globals.css';

export default function Home() {
  return (
    <div className="screen active">
      <div className="hero">
        <div className="logo-mark">
          <IconAccessPoint size={32} color="white" />
        </div>
        <h1>OffSpot</h1>
        <p className="tagline">Video interviews on your terms. Show what you can do — not just how you perform under pressure.</p>
        <Link href="/jobs" className="btn-primary" style={{ textDecoration: 'none' }}>
          <IconBriefcase size={18} /> Find a role
        </Link>
        <Link href="/employer/dashboard" className="btn-secondary" style={{ textDecoration: 'none' }}>
          <IconBuilding size={18} /> I'm hiring
        </Link>
      </div>
      <div className="page" style={{ paddingTop: 0 }}>
        <p className="section-label">Why OffSpot</p>
        <div className="card">
          <div className="card-header">
            <div className="card-icon">
              <IconClockPause size={18} color="#0F6E56" />
            </div>
            <div>
              <h3>Your pace, your time</h3>
            </div>
          </div>
          <p>Record answers when you're ready. Pause, re-record, take breaks. No real-time pressure.</p>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="card-icon">
              <IconAdjustmentsHorizontal size={18} color="#0F6E56" />
            </div>
            <div>
              <h3>Accessibility settings built in</h3>
            </div>
          </div>
          <p>Captions, extended time limits, text-to-speech prompts, and low-stimulation UI — always on.</p>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="card-icon">
              <IconEyeOff size={18} color="#0F6E56" />
            </div>
            <div>
              <h3>Blind screening first</h3>
            </div>
          </div>
          <p>Employers see your answers before they see anything else. Skills lead, not appearance.</p>
        </div>
      </div>
    </div>
  );
}
