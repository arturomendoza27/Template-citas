
import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import AuthPage from './components/AuthPage';
import Dashboard from './components/Dashboard';

type View = 'landing' | 'auth' | 'dashboard';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simple routing logic
  const navigate = (view: View) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const authStatus = localStorage.getItem('valeria_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      setCurrentView('dashboard');
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('valeria_auth', 'true');
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('valeria_auth');
    setCurrentView('landing');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-teal-100 selection:text-teal-900">
      {currentView === 'landing' && <LandingPage onStart={() => navigate('auth')} />}
      {currentView === 'auth' && <AuthPage onLogin={handleLogin} onBack={() => navigate('landing')} />}
      {currentView === 'dashboard' && <Dashboard onLogout={handleLogout} />}
    </div>
  );
};

export default App;
