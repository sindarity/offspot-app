import Link from 'next/link';
import { IconArrowLeft, IconChevronRight, IconInfinity } from '@tabler/icons-react';

export default function JobsPage() {
  return (
    <div className="screen active">
      <div className="nav-bar">
        <Link href="/" className="back-btn" style={{ textDecoration: 'none' }}>
          <IconArrowLeft size={18} /> Back
        </Link>
        <span className="nav-title">Open roles</span>
        <span style={{ width: 60 }}></span> {/* Spacer to center the title */}
      </div>
      <div className="page">
        <p className="section-label">Inclusive employers near you</p>
        <div className="card" style={{ padding: '0 1.25rem' }}>
          
          <Link href="/apply/job-1" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="job-row">
              <div className="company-dot">🌿</div>
              <div className="job-info">
                <h4>Customer Support Specialist</h4>
                <p>GreenLeaf Co · Remote · Part-time</p>
                <div style={{ marginTop: 5, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  <span className="badge badge-green">
                    <IconInfinity size={12} /> Flexible pace
                  </span>
                  <span className="badge badge-blue">Async only</span>
                </div>
              </div>
              <IconChevronRight size={16} color="var(--color-text-tertiary)" />
            </div>
          </Link>

          <Link href="/apply/job-2" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="job-row">
              <div className="company-dot">📦</div>
              <div className="job-info">
                <h4>Data Entry Associate</h4>
                <p>SupplyBridge · On-site · Full-time</p>
                <div style={{ marginTop: 5, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  <span className="badge badge-green">
                    <IconInfinity size={12} /> Flexible pace
                  </span>
                  <span className="badge badge-amber">Hybrid</span>
                </div>
              </div>
              <IconChevronRight size={16} color="var(--color-text-tertiary)" />
            </div>
          </Link>

          <Link href="/apply/job-3" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="job-row" style={{ borderBottom: 'none' }}>
              <div className="company-dot">🎨</div>
              <div className="job-info">
                <h4>Graphic Design Assistant</h4>
                <p>Forma Studio · Remote · Freelance</p>
                <div style={{ marginTop: 5, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  <span className="badge badge-green">
                    <IconInfinity size={12} /> Flexible pace
                  </span>
                  <span className="badge badge-blue">Portfolio welcome</span>
                </div>
              </div>
              <IconChevronRight size={16} color="var(--color-text-tertiary)" />
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
