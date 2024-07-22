'use client'; // Mark this file as a Client Component

import { useEffect } from 'react';
import './CursorAnimation.css'; // Ensure this path is correct

const CursorAnimation = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    const handleMouseMove = (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;

      cursorFollower.style.left = `${event.clientX}px`;
      cursorFollower.style.top = `${event.clientY}px`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
    </>
  );
};

export default CursorAnimation;

