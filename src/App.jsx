import { Suspense, lazy, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
const Layout = lazy(()=>import('./components/Layout'));
const Login = lazy(()=>import('./components/Login'));

function App() {
  // You would manage authentication state here
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token'));

  // For demonstration, simulate login
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    localStorage.setItem('token',true)
  };

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading application...</div>}>
        <Routes>
          {/* The initial route is the login page */}
          <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />

          {/* Protected routes that are lazy-loaded after authentication */}
          {isAuthenticated? (
            <>
              
              {/* Redirect to dashboard if authenticated and on root */}
              <Route path="/" element={<Layout />} />
            </>
          ) : (
            // Redirect to login if not authenticated
            <Route path="*" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          )}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
