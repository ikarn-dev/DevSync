import React, { useState } from 'react';

function ContactUS() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);

    // Redirect to Gmail when the button is clicked
    setTimeout(() => {
      window.location.href = "mailto:ikarn.dev@gmail.com"; // Open Gmail compose with the specified email address
    }, 200); // Match the animation duration before redirecting
  };

  return (
    <div
      className="bg-black"
      style={{
        width: '100%',
        height: '250px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 className="text-xl text-white" style={{ textAlign: 'center' }}>
        Get in Touch
      </h1>
      <button
        onClick={handleClick}
        style={{
          marginTop: '20px',
          backgroundColor: '#A2F97D',
          color: 'black',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '15px',
          cursor: 'pointer',
          transition: 'transform 0.2s ease-in-out', // Add smooth transition for clicking animation
          transform: isClicked ? 'scale(0.95)' : 'scale(1)', // Shrink button when clicked
        }}
      >
        Contact Us
      </button>
    </div>
  );
}

export default ContactUS;
