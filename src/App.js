import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import TrialModal from './TrialModal';
import ChartComponent from './ChartComponent'; // ← your separate file

function Home() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '120px 20px 60px',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: '#e2e8f0',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '4.2rem', color: '#60a5fa', marginBottom: '1.2rem', fontWeight: 'bold' }}>
        Forex Edge
      </h1>
      <p style={{
        fontSize: '1.6rem',
        maxWidth: '900px',
        margin: '0 auto 3rem',
        lineHeight: '1.6'
      }}>
        Professional forex insights, daily curated trade ideas, deep education, and community support –  
        all at just $29/month. More content, more value than the big players.
      </p>
      <div>
        <Link to="/pricing">
          <button style={{
            padding: '20px 70px',
            fontSize: '1.5rem',
            margin: '20px',
            background: '#22c55e',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(34,197,94,0.4)'
          }}>
            View Pricing
          </button>
        </Link>
        <Link to="/login">
          <button style={{
            padding: '20px 70px',
            fontSize: '1.5rem',
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer'
          }}>
            Login / Sign Up
          </button>
        </Link>
      </div>

      {/* Features Section */}
      <div style={{
        marginTop: '6rem',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <h2 style={{
          fontSize: '3rem',
          color: '#60a5fa',
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          Why Traders Choose Forex Edge
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          padding: '0 1rem'
        }}>
          <div style={{
            background: '#1e293b',
            padding: '2.5rem',
            borderRadius: '20px',
            borderLeft: '6px solid #22c55e',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
          }}>
            <h3 style={{ fontSize: '2rem', color: '#22c55e', marginBottom: '1rem' }}>
              Real-Time Trade Ideas
            </h3>
            <p style={{ fontSize: '1.3rem', color: '#cbd5e1', lineHeight: '1.6' }}>
              Daily curated, high-probability setups sent straight to your dashboard – no guesswork.
            </p>
          </div>

          <div style={{
            background: '#1e293b',
            padding: '2.5rem',
            borderRadius: '20px',
            borderLeft: '6px solid #3b82f6',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
          }}>
            <h3 style={{ fontSize: '2rem', color: '#3b82f6', marginBottom: '1rem' }}>
              Deep Education Library
            </h3>
            <p style={{ fontSize: '1.3rem', color: '#cbd5e1', lineHeight: '1.6' }}>
              Full courses, PDFs, videos – from beginner basics to advanced strategies.
            </p>
          </div>

          <div style={{
            background: '#1e293b',
            padding: '2.5rem',
            borderRadius: '20px',
            borderLeft: '6px solid #eab308',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
          }}>
            <h3 style={{ fontSize: '2rem', color: '#eab308', marginBottom: '1rem' }}>
              Super Affordable Pricing
            </h3>
            <p style={{ fontSize: '1.3rem', color: '#cbd5e1', lineHeight: '1.6' }}>
              Just $29/month (or $24 with annual) – no hidden fees, no upsells.
            </p>
          </div>

          <div style={{
            background: '#1e293b',
            padding: '2.5rem',
            borderRadius: '20px',
            borderLeft: '6px solid #ef4444',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
          }}>
            <h3 style={{ fontSize: '2rem', color: '#ef4444', marginBottom: '1rem' }}>
              Active Community Support
            </h3>
            <p style={{ fontSize: '1.3rem', color: '#cbd5e1', lineHeight: '1.6' }}>
              Private forum to discuss trades, share wins, and learn from others.
            </p>
          </div>

          <div style={{
            background: '#1e293b',
            padding: '2.5rem',
            borderRadius: '20px',
            borderLeft: '6px solid #a78bfa',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
          }}>
            <h3 style={{ fontSize: '2rem', color: '#a78bfa', marginBottom: '1rem' }}>
              Market Recaps & Alerts
            </h3>
            <p style={{ fontSize: '1.3rem', color: '#cbd5e1', lineHeight: '1.6' }}>
              Daily summaries + instant notifications for major news/events.
            </p>
          </div>

          <div style={{
            background: '#1e293b',
            padding: '2.5rem',
            borderRadius: '20px',
            borderLeft: '6px solid #60a5fa',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
          }}>
            <h3 style={{ fontSize: '2rem', color: '#60a5fa', marginBottom: '1rem' }}>
              Beginner to Pro Friendly
            </h3>
            <p style={{ fontSize: '1.3rem', color: '#cbd5e1', lineHeight: '1.6' }}>
              Clear explanations + risk management tools for every skill level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pricing() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div style={{ padding: '120px 20px', background: '#0f172a', color: '#e2e8f0', minHeight: '100vh', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3.8rem', color: '#60a5fa', marginBottom: '1rem' }}>Choose Your Plan</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '4rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
        Unlock everything. Start your 7-day free trial today – no card needed.
      </p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '3rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          background: '#1e293b',
          padding: '3.5rem 2.5rem',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '420px',
          border: '2px solid #475569',
          position: 'relative'
        }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Monthly</h2>
          <div style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>$29</div>
          <p style={{ color: '#94a3b8', fontSize: '1.4rem', marginBottom: '3rem' }}>per month</p>

          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '3rem', fontSize: '1.3rem' }}>
            <li style={{ margin: '1.5rem 0' }}>✓ Daily curated trade ideas</li>
            <li style={{ margin: '1.5rem 0' }}>✓ Full education library & PDFs</li>
            <li style={{ margin: '1.5rem 0' }}>✓ Market recaps & alerts</li>
            <li style={{ margin: '1.5rem 0' }}>✓ Community forum access</li>
          </ul>

          <button 
            onClick={openModal}
            style={{
              width: '100%',
              padding: '20px',
              background: '#22c55e',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1.4rem',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(34,197,94,0.4)'
            }}
          >
            Start Monthly Trial
          </button>
        </div>

        <div style={{
          background: '#1e293b',
          padding: '3.5rem 2.5rem',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '420px',
          border: '3px solid #22c55e',
          position: 'relative',
          boxShadow: '0 0 30px rgba(34,197,94,0.5)'
        }}>
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#22c55e',
            color: 'white',
            padding: '10px 24px',
            borderRadius: '30px',
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}>
            Best Value • Save 17%
          </div>

          <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Annual</h2>
          <div style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>$288</div>
          <p style={{ color: '#94a3b8', fontSize: '1.4rem', marginBottom: '0.5rem' }}>per year</p>
          <p style={{ color: '#22c55e', fontSize: '1.6rem', fontWeight: 'bold', marginBottom: '3rem' }}>
            Only $24 per month
          </p>

          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '3rem', fontSize: '1.3rem' }}>
            <li style={{ margin: '1.5rem 0' }}>✓ Everything in Monthly</li>
            <li style={{ margin: '1.5rem 0' }}>✓ Save $60 per year</li>
            <li style={{ margin: '1.5rem 0' }}>✓ Priority email support</li>
            <li style={{ margin: '1.5rem 0' }}>✓ Early access to new features</li>
          </ul>

          <button 
            onClick={openModal}
            style={{
              width: '100%',
              padding: '20px',
              background: '#22c55e',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1.4rem',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(34,197,94,0.5)'
            }}
          >
            Start Annual Trial
          </button>
        </div>
      </div>

      <p style={{ marginTop: '5rem', color: '#94a3b8', fontSize: '1.2rem' }}>
        7-day free trial • Cancel anytime • No credit card needed to start
      </p>

      <TrialModal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    window.location.href = '/dashboard';
  };

  return (
    <div style={{ maxWidth: '440px', margin: '140px auto', padding: '60px 50px', background: '#1e293b', borderRadius: '20px', color: '#e2e8f0' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.4rem' }}>Login or Sign Up</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '2.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.8rem', fontSize: '1.2rem' }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '16px', borderRadius: '10px', border: '1px solid #475569', background: '#0f172a', color: 'white', fontSize: '1.2rem' }}
          />
        </div>
        <div style={{ marginBottom: '3rem' }}>
          <label style={{ display: 'block', marginBottom: '0.8rem', fontSize: '1.2rem' }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '16px', borderRadius: '10px', border: '1px solid #475569', background: '#0f172a', color: 'white', fontSize: '1.2rem' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '18px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '12px', fontSize: '1.3rem', cursor: 'pointer' }}>
          Login
        </button>
      </form>
    </div>
  );
}

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userEmail = localStorage.getItem('userEmail') || 'Trader';

  useEffect(() => {
    if (isLoggedIn) {
      axios.get('http://localhost:5000/api/hello')
        .then(response => {
          setData(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Fetch error:', error);
          setLoading(false);
        });
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  const watchlist = [
    { pair: 'EUR/USD', price: '1.0925', change: '+0.45%', direction: 'up' },
    { pair: 'GBP/JPY', price: '184.75', change: '-0.32%', direction: 'down' },
    { pair: 'AUD/USD', price: '0.6580', change: '+0.18%', direction: 'up' },
    { pair: 'USD/JPY', price: '149.20', change: '+0.12%', direction: 'up' }
  ];

  return (
    <div style={{ 
      background: '#0f172a', 
      color: '#e2e8f0', 
      minHeight: '100vh', 
      padding: '3rem 1.5rem' 
    }}>
      <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', color: '#60a5fa', marginBottom: '0.4rem' }}>
          Forex Edge Dashboard
        </h1>
        <p style={{ fontSize: '1.8rem', color: '#60a5fa', marginBottom: '0.5rem' }}>
          Welcome back, {userEmail}
        </p>
        <p style={{ fontSize: '1.5rem', color: '#94a3b8' }}>
          Your daily trading advantage – updated live
        </p>
      </header>

      {/* Watchlist Section with Polished Charts */}
      <div style={{ marginBottom: '5rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.8rem', color: '#cbd5e1', marginBottom: '2rem' }}>
          Your Watchlist
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.8rem',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {watchlist.map((item, index) => (
            <div key={index} style={{
              background: '#1e293b',
              padding: '1.8rem',
              borderRadius: '16px',
              borderLeft: `5px solid ${item.direction === 'up' ? '#22c55e' : '#ef4444'}`,
              boxShadow: '0 6px 20px rgba(0,0,0,0.3)'
            }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.6rem', color: '#e2e8f0' }}>
                {item.pair}
              </h3>
              <div style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '0.4rem' }}>
                {item.price}
              </div>
              <p style={{ 
                fontSize: '1.4rem', 
                color: item.direction === 'up' ? '#22c55e' : '#ef4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                marginBottom: '0.8rem'
              }}>
                {item.direction === 'up' ? '↑' : '↓'} {item.change}
              </p>

              <ChartComponent pair={item.pair} direction={item.direction} />
            </div>
          ))}
        </div>
      </div>

      {loading ? (
        <p style={{ textAlign: 'center', fontSize: '1.6rem' }}>Loading your edge...</p>
      ) : (
        <>
          {data && (
            <div style={{
              background: '#1e293b',
              padding: '2.5rem',
              borderRadius: '20px',
              marginBottom: '4rem',
              textAlign: 'center',
              maxWidth: '900px',
              marginLeft: 'auto',
              marginRight: 'auto',
              boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
            }}>
              <h2 style={{ color: '#60a5fa', marginBottom: '1.2rem', fontSize: '2.5rem' }}>{data.message}</h2>
              <p style={{ color: '#94a3b8', fontSize: '1.2rem' }}>
                Last updated: {data.timestamp}
              </p>
            </div>
          )}

          <h2 style={{ textAlign: 'center', margin: '5rem 0 2.5rem', fontSize: '3rem', color: '#cbd5e1' }}>
            Today's Trade Ideas
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1600px',
            margin: '0 auto'
          }}>
            <div style={{ background: '#1e293b', padding: '2.5rem', borderRadius: '20px', borderLeft: '8px solid #22c55e' }}>
              <h3 style={{ color: '#22c55e', marginBottom: '1.5rem', fontSize: '2rem' }}>EUR/USD – Bullish Bias</h3>
              <p style={{ margin: '1.2rem 0', fontWeight: 'bold', fontSize: '1.5rem' }}>Entry: 1.0850 | Target: 1.0950 | Stop: 1.0780</p>
              <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '1.2rem' }}>
                Strong EU PMI + dovish Fed outlook = upside continuation likely.
              </p>
              <small style={{ color: '#64748b', display: 'block', marginTop: '1.5rem', fontSize: '1.1rem' }}>
                Risk: 1% | Reward/Risk: 1.4:1
              </small>
            </div>

            <div style={{ background: '#1e293b', padding: '2.5rem', borderRadius: '20px', borderLeft: '8px solid #ef4444' }}>
              <h3 style={{ color: '#ef4444', marginBottom: '1.5rem', fontSize: '2rem' }}>GBP/JPY – Bearish Setup</h3>
              <p style={{ margin: '1.2rem 0', fontWeight: 'bold', fontSize: '1.5rem' }}>Entry: 185.50 | Target: 182.00 | Stop: 187.00</p>
              <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '1.2rem' }}>
                Risk-off sentiment + BoE caution = downside momentum.
              </p>
              <small style={{ color: '#64748b', display: 'block', marginTop: '1.5rem', fontSize: '1.1rem' }}>
                Risk: 1% | Reward/Risk: 2:1
              </small>
            </div>

            <div style={{ background: '#1e293b', padding: '2.5rem', borderRadius: '20px', borderLeft: '8px solid #eab308' }}>
              <h3 style={{ color: '#eab308', marginBottom: '1.5rem', fontSize: '2rem' }}>AUD/USD – Range Watch</h3>
              <p style={{ margin: '1.2rem 0', fontWeight: 'bold', fontSize: '1.5rem' }}>Range: 0.6500 – 0.6650</p>
              <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '1.2rem' }}>
                RBA rate decision tomorrow – stay flat until clear breakout.
              </p>
              <small style={{ color: '#64748b', display: 'block', marginTop: '1.5rem', fontSize: '1.1rem' }}>
                Risk: 0.5% if triggered | Volatility expected
              </small>
            </div>
          </div>

          {/* Recent Market Recap */}
          <div style={{
            background: '#1e293b',
            padding: '2.5rem',
            borderRadius: '20px',
            margin: '5rem auto 3rem',
            maxWidth: '1000px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
          }}>
            <h3 style={{ color: '#60a5fa', fontSize: '2.2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Recent Market Recap
            </h3>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.7', color: '#cbd5e1' }}>
              The week saw strong USD strength on hotter-than-expected US CPI data, pushing EUR/USD lower while boosting USD/JPY to new highs. Risk sentiment improved mid-week on Fed comments hinting at a possible pause in hikes. Key events ahead: ECB decision and US retail sales.
            </p>
            <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginTop: '1.5rem', textAlign: 'center' }}>
              Stay tuned for tomorrow's NFP preview and live updates.
            </p>
          </div>
        </>
      )}

      <div style={{ textAlign: 'center', marginTop: '6rem' }}>
        <button 
          onClick={() => {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userEmail');
            window.location.href = '/';
          }}
          style={{
            padding: '18px 80px',
            background: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '1.4rem',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

function About() {
  return (
    <div style={{ 
      background: '#0f172a', 
      color: '#e2e8f0', 
      minHeight: '100vh', 
      padding: '120px 20px', 
      textAlign: 'center' 
    }}>
      <h1 style={{ fontSize: '3.8rem', color: '#60a5fa', marginBottom: '1rem' }}>About Forex Edge</h1>
      <p style={{ 
        fontSize: '1.5rem', 
        maxWidth: '900px', 
        margin: '0 auto 4rem', 
        lineHeight: '1.7' 
      }}>
        Forex Edge is your ultimate platform for gaining a competitive advantage in the forex market. We provide real-time trade ideas, educational resources, and market analysis to help traders of all levels make informed decisions and maximize profits.
      </p>

      <div style={{ 
        maxWidth: '900px', 
        margin: '0 auto 4rem', 
        textAlign: 'left' 
      }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          color: '#cbd5e1', 
          marginBottom: '1.5rem' 
        }}>Our Mission</h2>
        <p style={{ 
          fontSize: '1.3rem', 
          lineHeight: '1.7', 
          marginBottom: '2rem', 
          color: '#94a3b8' 
        }}>
          Our mission is to democratize forex trading by offering affordable, high-quality tools and insights that were once only available to professional traders. We aim to empower individuals to achieve financial independence through smart, data-driven trading.
        </p>

        <h2 style={{ 
          fontSize: '2.5rem', 
          color: '#cbd5e1', 
          marginBottom: '1.5rem' 
        }}>Why Forex Edge is Better Than Competitors (Like mrktedge.ai)</h2>
        <ul style={{ 
          listStyle: 'none', 
          padding: 0, 
          fontSize: '1.3rem', 
          lineHeight: '1.8' 
        }}>
          <li style={{ margin: '1.2rem 0' }}>
            <strong style={{ color: '#22c55e' }}>Real-Time Edge:</strong> Unlike mrktedge.ai, which focuses on general market trends, we deliver actionable forex-specific trade ideas updated in real-time.
          </li>
          <li style={{ margin: '1.2rem 0' }}>
            <strong style={{ color: '#22c55e' }}>Affordable Pricing:</strong> Starting at just $29/month, we're more accessible without sacrificing quality – no hidden fees or upsells.
          </li>
          <li style={{ margin: '1.2rem 0' }}>
            <strong style={{ color: '#22c55e' }}>Education-First Approach:</strong> Comprehensive tutorials and strategies tailored for beginners to experts, going beyond basic alerts.
          </li>
          <li style={{ margin: '1.2rem 0' }}>
            <strong style={{ color: '#22c55e' }}>Community-Driven:</strong> Built with user feedback in mind, ensuring features that actually help you trade better.
          </li>
        </ul>
      </div>

      <p style={{ 
        fontSize: '1.5rem', 
        maxWidth: '900px', 
        margin: '0 auto', 
        lineHeight: '1.7' 
      }}>
        Join us today and experience the difference – start your free trial and edge out the competition!
      </p>
    </div>
  );
}

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <nav style={{ 
        background: '#1e293b', 
        padding: '1.5rem 2rem',
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        boxShadow: '0 6px 20px rgba(0,0,0,0.6)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <Link to="/" style={{ color: '#60a5fa', fontSize: '2.2rem', fontWeight: 'bold', textDecoration: 'none' }}>
          Forex Edge
        </Link>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          {!isMobile ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
              <Link to="/pricing" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '1.3rem' }}>
                Pricing
              </Link>
              <Link to="/about" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '1.3rem' }}>
                About
              </Link>
              {isLoggedIn ? (
                <>
                  <Link to="/dashboard" style={{ color: '#60a5fa', textDecoration: 'none', fontSize: '1.3rem', fontWeight: 'bold' }}>
                    Dashboard
                  </Link>
                  <button 
                    onClick={() => {
                      localStorage.removeItem('isLoggedIn');
                      localStorage.removeItem('userEmail');
                      window.location.href = '/';
                    }}
                    style={{
                      padding: '12px 28px',
                      background: '#ef4444',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      fontSize: '1.2rem'
                    }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" style={{ color: '#22c55e', textDecoration: 'none', fontSize: '1.3rem', fontWeight: 'bold' }}>
                  Login / Sign Up
                </Link>
              )}
            </div>
          ) : (
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: '#cbd5e1',
                fontSize: '2.2rem',
                cursor: 'pointer',
                padding: '0.5rem'
              }}
            >
              ☰
            </button>
          )}
        </div>
      </nav>

      {menuOpen && isMobile && (
        <div style={{
          background: '#1e293b',
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          padding: '1.5rem',
          boxShadow: '0 6px 20px rgba(0,0,0,0.6)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.8rem'
        }}>
          <Link to="/pricing" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '1.4rem' }} onClick={() => setMenuOpen(false)}>
            Pricing
          </Link>
          <Link to="/about" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '1.4rem' }} onClick={() => setMenuOpen(false)}>
            About
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" style={{ color: '#60a5fa', textDecoration: 'none', fontSize: '1.4rem', fontWeight: 'bold' }} onClick={() => setMenuOpen(false)}>
                Dashboard
              </Link>
              <button 
                onClick={() => {
                  localStorage.removeItem('isLoggedIn');
                  localStorage.removeItem('userEmail');
                  window.location.href = '/';
                  setMenuOpen(false);
                }}
                style={{
                  padding: '12px 40px',
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontSize: '1.3rem'
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" style={{ color: '#22c55e', textDecoration: 'none', fontSize: '1.4rem', fontWeight: 'bold' }} onClick={() => setMenuOpen(false)}>
              Login / Sign Up
            </Link>
          )}
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer style={{
        background: '#0f172a',
        color: '#94a3b8',
        padding: '4rem 1rem 3rem',
        textAlign: 'center',
        borderTop: '1px solid #334155'
      }}>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>
          &copy; {new Date().getFullYear()} Forex Edge. All rights reserved.
        </p>
        <div style={{ 
          marginBottom: '1.5rem', 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '1.5rem' 
        }}>
          <Link to="/pricing" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '1.2rem' }}>
            Pricing
          </Link>
          <Link to="/about" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '1.2rem' }}>
            About
          </Link>
          <a href="https://x.com/Dupreez7777" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '1.2rem' }}>
            @Dupreez7777 on X
          </a>
        </div>
        <p style={{ fontSize: '1rem', maxWidth: '700px', margin: '0 auto' }}>
          Trading involves significant risk of loss and is not suitable for all investors. Forex Edge provides educational content and trade ideas only – not financial advice.
        </p>
      </footer>
    </Router>
  );
}

export default App;