import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { startLoadUserStats } from "../../redux/actions/authActions";
import { sortStats } from "../helpers/sortedStats";
import UserTopScoreTable from "../UserTopScoreTable";

const UserStatsScreen = () => {
  const dispatch = useDispatch();
  const { stats, uid } = useSelector((state) => state.auth);
  useEffect(() => {
    if (uid) {
      dispatch(startLoadUserStats(uid));
    }
  }, [dispatch, uid]);

  // GET TOP 5 TRADITIONAL
  const traditionalStats = stats.filter(
    (game) => game.gameMode === "traditional",
  );
  const sortedTraditionalStats = sortStats(traditionalStats);
  const topTraditionalStats = sortedTraditionalStats.slice(0, 5);
  // GET TOP 5 TRADITIONAL

  // GET TOP 5 STRIKEOUT
  const strikeoutStats = stats.filter((game) => game.gameMode === "strikeout");
  const sortedStrikeoutStats = sortStats(strikeoutStats);
  const topStrikeoutStats = sortedStrikeoutStats.slice(0, 5);
  // GET TOP 5 STRIKEOUT

  // GET TOP 5 JEOPARDY
  const jeopardyStats = stats.filter((game) => game.gameMode === "jeopardy");
  const sortedJeopardyStats = sortStats(jeopardyStats);
  const topJeopardyStats = sortedJeopardyStats.slice(0, 5);
  // GET TOP 5 JEOPARDY

  if (stats.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-lg-4'>
          <div>
            <h5>Top 5 Traditional Mode</h5>
          </div>
          <UserTopScoreTable stats={topTraditionalStats} />
        </div>

        <div className='col-lg-4'>
          <div>
            <h5>Top 5 Strikeout Mode</h5>
          </div>
          <UserTopScoreTable stats={topStrikeoutStats} />
        </div>

        <div className='col-lg-4'>
          <div>
            <h5>Top 5 Jeopardy Mode</h5>
          </div>
          <UserTopScoreTable stats={topJeopardyStats} />
        </div>
      </div>

      <div className='row justify-content-center'>
        <div className='col-lg-8 col-sm-12'>
          <div>
            <h5>Recent Games</h5>
          </div>
          <table className='table table-dark'>
            <thead>
              <tr>
                <th scope='col'>Date</th>
                <th scope='col'>Mode</th>
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
                    <td>{game.gameMode.toUpperCase()}</td>
                    <td>{game.hits}</td>
                    <td>{game.errors}</td>
                    <th scope='row'>{game.points}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserStatsScreen;
