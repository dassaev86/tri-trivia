import React from "react";
import { Link } from "react-router-dom";

const JeopardyScreen = () => {
  return (
    <div>
      <h1>Jeopardy Screen</h1>
      <Link to='/jeopardy/game' className='btn btn-primary'>
        Start Game
      </Link>
    </div>
  );
};

export default JeopardyScreen;
