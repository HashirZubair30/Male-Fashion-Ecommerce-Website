import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import FAQs from './components/FAQs';
import Shop from './components/Shop';
import Contact from './components/Contact';
import AboutPage from './components/AboutPage';
import './App.css';
import Blog from './components/Blog';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function ErrorPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>,
      errorElement: <ErrorPage />, // Add a fallback error page
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signin",
      element: <><Navbar /><SignIn /></>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signup",
      element: <><Navbar /><SignUp /></>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/faqs",
      element: <><Navbar /><FAQs /></>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/shop",
      element: <Shop />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/blog",
      element: <Blog/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/aboutpage",
      element: <AboutPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/contact",
      element: <Contact />,
      errorElement: <ErrorPage />,
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
