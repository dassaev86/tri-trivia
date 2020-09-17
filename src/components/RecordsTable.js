import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";

const RecordsTable = ({ records }) => {
  const { uid } = useSelector((state) => state.auth);

  return (
    <table className='table table-striped table-dark'>
      <thead>
        <tr>
          <th scope='col'>Place</th>
          <th scope='col'>User</th>
          <th scope='col'>Date</th>
          <th scope='col'>Points</th>
        </tr>
      </thead>
      <tbody>
        {records.map((game, index) => {
          return (
            <tr
              key={game.date}
              className={game.userUid === uid ? "bg-primary" : undefined}>
              <td>{index + 1}</td>
              <td>
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <img
                    src={game.photoUrl}
                    className='img-thumbnail'
                    alt='profile pic'
                    style={{
                      width: "30px",
                      maxHeight: "30px",
                      marginRight: "5px",
                    }}
                  />
                  {game.username}
                </div>
              </td>
              <td>{moment(game.date).fromNow()}</td>
              <th scope='row'>{game.points} </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default RecordsTable;
