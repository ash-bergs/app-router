'use client'; // next.js directive

// Error pages are automatically handled by next.js
// we get 2 properties - error and reset, a function that can be used to redo the request
const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default error;
