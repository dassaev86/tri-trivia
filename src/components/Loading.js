import React from "react";

const Loading = () => {
  return (
    <div style={{ marginTop: "200px" }}>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading</span>
        </div>
      </div>
      <p className='mt-2'>Wait for it...</p>
    </div>
  );
};

export default Loading;
