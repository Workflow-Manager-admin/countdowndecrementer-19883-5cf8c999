import React, { useState } from "react";

// Define the project's color palette
const COLORS = {
  primary: "#222831",
  secondary: "#235ab3",
  accent: "#00adb5",
};

// Styles for the overall container
const containerStyle: React.CSSProperties = {
  minHeight: "100vh",
  minWidth: "100vw",
  background: COLORS.primary,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

// Styles for the counter display
const counterDisplayStyle: React.CSSProperties = {
  fontSize: "10rem",
  fontWeight: 700,
  color: COLORS.accent,
  background: COLORS.secondary,
  borderRadius: "2rem",
  padding: "2rem 4.5rem",
  marginBottom: "3rem",
  boxShadow: `0 6px 40px 0 ${COLORS.secondary}30`,
  textAlign: "center",
  minWidth: "11rem",
  userSelect: "none",
  letterSpacing: "0.2rem",
  transition: "background 0.25s",
};

// Styles for the decrement button
const buttonStyle: React.CSSProperties = {
  fontSize: "2.9rem",
  fontWeight: 600,
  color: COLORS.primary,
  background: COLORS.accent,
  border: "none",
  borderRadius: "2.5rem",
  boxShadow: `0 4px 24px 0 ${COLORS.accent}2a`,
  padding: "2.1rem 4.5rem",
  cursor: "pointer",
  outline: "none",
  transition: "background 0.18s, box-shadow 0.18s",
  marginTop: "1.3rem"
};

/**
 * PUBLIC_INTERFACE
 * CountdownDecrementer component.
 * A minimal, focused decrementing counter for Remotion.
 * Counter starts at 10 and decrements to 0, showing a prominent button.
 */
export const CountdownDecrementer: React.FC = () => {
  // Counter state, initialize at 10
  const [count, setCount] = useState(10);

  // Handler for decrementing, ensures count doesn't go below zero
  const handleDecrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div style={containerStyle}>
      <span style={counterDisplayStyle} data-testid="counter-value">
        {count}
      </span>
      <button
        style={{
          ...buttonStyle,
          opacity: count === 0 ? 0.6 : 1,
          cursor: count === 0 ? "not-allowed" : "pointer"
        }}
        onClick={handleDecrement}
        disabled={count === 0}
        data-testid="decrement-btn"
      >
        {count > 0 ? "Decrement" : "Done"}
      </button>
    </div>
  );
};
