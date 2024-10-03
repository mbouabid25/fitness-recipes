"use client"; // Ensure this component is a client-side component
import Link from 'next/link';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';

export default function Navbar() {
  const { isSignedIn } = useUser(); // Client-side hook, only use in client components

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">Logo</div>
      </div>
      <div className="navbar-center">
        <Link href="/recipes" className="nav-link">Recipes</Link>
        <a href="#meal-planner" className="nav-link">Meal Planner</a>
        <a href="#communities" className="nav-link">Communities</a>
        <a href="#more" className="nav-link">More</a>
      </div>
      <div className="navbar-right">
        {/* Show UserButton if signed in, otherwise show SignInButton */}
        {isSignedIn ? (
          <UserButton />
        ) : (
          <SignInButton mode="modal">
            <button className="login-button">Log In</button>
          </SignInButton>
        )}
        <button className="get-app-button">Get App</button>
      </div>
    </nav>
  );
}