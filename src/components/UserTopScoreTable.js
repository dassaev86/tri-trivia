import React from "react";
import moment from "moment";

const UserTopScoreTable = ({ stats }) => {
  return (
    <>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th scope='col'>Date</th>
            <th scope='col'>Hits</th>
            <th scope='col'>Errors</th>
            <th scope='col'>Points</th>
          </tr>
        </thead>

        <tbody>
          {stats.map((game) => {
            return (
              <tr key={game.date}>
                <td>{moment(game.date).fromNow()}</td>
                <td>{game.hits}</td>
                <td>{game.errors}</td>
                <th scope='row'>{game.points}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
      {stats.length === 0 && (
        <div className='alert alert-dark'>No games played in this category</div>
      )}
    </>
  );
};

export default UserTopScoreTable;
