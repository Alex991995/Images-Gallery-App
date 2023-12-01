"use client"

function error({error}: {error: Error}) {
  return (
    <div className="absolute top-1/2 left-[40%]">{error.message}</div>
  );
}

export default error;