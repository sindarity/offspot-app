"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IconArrowLeft, IconInfoCircle, IconArrowRight } from '@tabler/icons-react';

const questions = [
  "Tell us about yourself and what you're looking for in your next role.",
  "Tell us about a time you helped someone — a colleague, customer, or anyone — solve a problem. What did you do and what happened?"
];

export default function InterviewPage({ params }) {
  const router = useRouter();
  const [currentQ, setCurrentQ] = useState(0);
  const [pace, setPace] = useState('Relaxed');
  const [answers, setAnswers] = useState({ q1: '', q2: '' });

  useEffect(() => {
    const savedPace = localStorage.getItem('offspot_pace');
    if (savedPace) {
      setPace(savedPace);
    }
    const savedAnswers = localStorage.getItem('offspot_answers');
    if (savedAnswers) {
      try {
        setAnswers(JSON.parse(savedAnswers));
      } catch (e) {}
    }
  }, []);

  const handleNext = () => {
    localStorage.setItem('offspot_answers', JSON.stringify(answers));
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      router.push(`/apply/${params.jobId}/review`);
    }
  };

  const currentAnswerKey = currentQ === 0 ? 'q1' : 'q2';

  return (
    <div className="screen active">
      <div className="nav-bar">
        <Link href={`/apply/${params.jobId}`} className="back-btn" style={{ textDecoration: 'none' }}>
          <IconArrowLeft size={18} /> Setup
        </Link>
        <span className="nav-title">Question {currentQ + 1} of {questions.length}</span>
        <span style={{ width: 70 }}></span>
      </div>
      <div className="page">
        
        <div className="q-progress">
          {questions.map((_, i) => (
            <div key={i} className={`q-dot ${i < currentQ ? 'done' : i === currentQ ? 'current' : ''}`}></div>
          ))}
        </div>

        <div className="pace-note">
          <IconInfoCircle size={16} color="#854F0B" style={{ flexShrink: 0, marginTop: 2 }} />
          <p>
            {pace === 'No time limit' 
              ? 'No time limit is set. Take as long as you need.' 
              : pace === 'Written only' 
              ? 'Take your time to type out your answer. There is no time limit for written mode.' 
              : `You chose the ${pace} pace. Try to keep your answer around ${pace === 'Relaxed' ? '5' : '3'} minutes.`}
          </p>
        </div>

        <div className="question-box">
          <p>{questions[currentQ]}</p>
        </div>

        {pace === 'Written only' ? (
          <div>
            <label className="form-label">Your Answer</label>
            <textarea 
              rows="6" 
              placeholder="Type your response here..." 
              value={answers[currentAnswerKey]}
              onChange={(e) => setAnswers({...answers, [currentAnswerKey]: e.target.value})}
            />
          </div>
        ) : (
          <div>
            <div className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem', marginBottom: '1.5rem', borderStyle: 'dashed' }}>
              <p style={{ marginBottom: 12 }}>Record your answer using Loom (or any other tool) and paste the public link below.</p>
              <a href="https://www.loom.com/" target="_blank" rel="noreferrer" className="btn-secondary" style={{ display: 'inline-flex', width: 'auto', marginBottom: 16 }}>
                Open Loom to Record
              </a>
              <input 
                type="text" 
                placeholder="https://www.loom.com/share/..." 
                value={answers[currentAnswerKey]}
                onChange={(e) => setAnswers({...answers, [currentAnswerKey]: e.target.value})}
              />
            </div>
          </div>
        )}

        <button className="btn-secondary" onClick={handleNext} style={{ marginTop: '1rem' }}>
          {currentQ < questions.length - 1 ? 'Next Question ' : 'Done — Review Answers '} 
          <IconArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
