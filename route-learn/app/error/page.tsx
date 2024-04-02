"use client";
// dashboard/page.js
import React from "react";

export default function Page() {
  const [error, setError] = React.useState(false);

  const handleGetError = () => {
    setError(true);
  };

  return (
    <>
      {error ? (
        Error()
      ) : (
        <button className="btn" onClick={handleGetError}>
          Get Error
        </button>
      )}
    </>
  );
}
