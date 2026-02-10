# Helping-students
Your own personal daily schedule organizer
import React, { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState('login'); // login, profile, dashboard
  const [userData, setUserData] = useState({
    email: '',
    grade: '',
    sleepHours: 8,
    tasks: []
  });

  const handleLogin = (e) => {
    e.preventDefault();
    setStep('profile'); // Move to profile creation after login
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setStep('dashboard'); // Move to the main app
  };

  return (
    <div className="App">
      {step === 'login' && <LoginForm onLogin={handleLogin} />}
      {step === 'profile' && <ProfileSetup onSave={handleProfileSubmit} setData={setUserData} data={userData} />}
      {step === 'dashboard' && <Dashboard user={userData} />}
    </div>
  );
}

// --- Component: Login ---
const LoginForm = ({ onLogin }) => (
  <div className="card">
    <h2>Student<span>Pal</span></h2>
    <form onSubmit={onLogin}>
      <input type="email" placeholder="Student Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit" className="btn-primary">Enter Campus</button>
    </form>
  </div>
);

// --- Component: Profile & Sleep Logs ---
const ProfileSetup = ({ onSave, setData, data }) => (
  <div className="card">
    <h2>Create Your Profile</h2>
    <form onSubmit={onSave}>
      <label>Grade Level</label>
      <select onChange={(e) => setData({...data, grade: e.target.value})}>
        <option>9th</option><option>10th</option><option>11th</option><option>12th</option>
      </select>
      
      <label>Avg. Sleep (hrs/night)</label>
      <input type="number" placeholder="8" onChange={(e) => setData({...data, sleepHours: e.target.value})} />
      
      <button type="submit" className="btn-primary">Sync with Infinite Campus</button>
      <p className="hint">Note: Grades will be pulled automatically via IC API simulation.</p>
    </form>
  </div>
);

// --- Component: Dashboard (The "Planet Fitness" for Students) ---
const Dashboard = ({ user }) => (
  <div className="dashboard">
    <header>
      <h1>Welcome, {user.grade} Grader</h1>
      <div className="stat">Sleep Goal: {user.sleepHours} hrs 💤</div>
    </header>
    
    <div className="grid">
      <section className="card">
        <h3>Daily Study Checklist</h3>
        <ul>
          <li><input type="checkbox" /> Review Bio Notes</li>
          <li><input type="checkbox" /> Math Problem Set 4</li>
        </ul>
      </section>

      <section className="card ai-box">
        <h3>AI Study Agent </h3>
        <p>"I've noticed you're sleeping {user.sleepHours} hours. Want me to draft a lighter study schedule for today?"</p>
        <button className="btn-secondary">Generate Flashcards</button>
      </section>
    </div>
  </div>
);

export default App;
