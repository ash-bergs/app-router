'use client';

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      <button onClick={reset}>Try Again</button>
      <h1>{error.message}</h1>
    </div>
  );
};
