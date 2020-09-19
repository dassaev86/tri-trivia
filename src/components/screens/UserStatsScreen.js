import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import {
  changePhoto,
  changeUsername,
  startLoadUserStats,
} from "../../redux/actions/authActions";
import { sortStats } from "../helpers/sortedStats";
import UserTopScoreTable from "../UserTopScoreTable";
// import Loading from "../Loading";
import NotLogged from "../NotLogged";
import { useState } from "react";

const UserStatsScreen = () => {
  const dispatch = useDispatch();
  const { stats, uid, logged, name, photoUrl } = useSelector(
    (state) => state.auth,
  );
  const { loading } = useSelector((state) => state.ui);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState(null);
  const [imageName, setImageName] = useState("No image selected");
  const [showChangeProfile, setShowChangeProfile] = useState(false);

  const defaultPhotoUrl =
    "https://firebasestorage.googleapis.com/v0/b/triviaapp-f19ed.appspot.com/o/empty-avatar.jpg?alt=media&token=79479c74-2db5-4a68-9a7e-a72bc02c60fc";
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

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePicture = () => {
    document.querySelector("#inputFile").click();
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setImageName(e.target.files[0].name);
    }
  };

  const handleApplyChanges = () => {
    if (username !== null) {
      dispatch(changeUsername(username));
      setUsername(null);
    }

    if (file !== null) {
      dispatch(changePhoto(file));
      setImageName("No image selected");
      setFile(null);
    }
  };

  if (!logged) {
    return <NotLogged />;
  }

  // if (stats.length === 0) {
  //   return <Loading />;
  // }

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-12 col-sm-8 col-lg-5'>
          <div className='card p-4'>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 1 }}>
                <img
                  src={photoUrl !== null ? photoUrl : defaultPhotoUrl}
                  alt='Profile'
                  style={{ width: "100px" }}
                />

                <h4 className='mt-2'>{name} </h4>
                <p
                  onClick={() => setShowChangeProfile(!showChangeProfile)}
                  style={{
                    fontSize: "12px",
                    textDecoration: "underline",
                    color: "#35A00C",
                    marginTop: "-5px",
                    cursor: "pointer",
                  }}>
                  {!showChangeProfile ? "Change profile" : "Close Edit Options"}
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <h5>Total Games Played</h5>
                <table className='table table-sm'>
                  <tbody>
                    <tr>
                      <td>Traditional:</td>
                      <td>{traditionalStats.length}</td>
                    </tr>
                    <tr>
                      <td>Strikeout:</td>
                      <td>{strikeoutStats.length}</td>
                    </tr>
                    <tr>
                      <td>Jeopardy:</td>
                      <td>{jeopardyStats.length}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Aqui pondré las opciones para cambiar de nombre e imagen de perfil */}

            {showChangeProfile && (
              <div>
                <h5>Change your profile</h5>

                <div className='input-group mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Select a username'
                    aria-label="Recipient's username"
                    aria-describedby='basic-addon2'
                    onChange={handleInputChange}
                    defaultValue={name}></input>
                </div>

                <div className='input-group mb-3'>
                  <button
                    className='btn btn-warning'
                    onClick={handleChangePicture}>
                    Change Profile Picture
                  </button>

                  <p
                    style={{
                      marginLeft: "30px",
                      marginTop: "15px",
                      fontSize: "12px",
                      color: "#35A00C",
                    }}>
                    {imageName}
                  </p>

                  <input
                    type='file'
                    name='file'
                    id='inputFile'
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </div>

                <button
                  className='btn btn-block btn-primary mt-3'
                  onClick={handleApplyChanges}
                  disabled={loading}>
                  {!loading ? "Apply Changes" : "Wait for it..."}
                </button>
              </div>
            )}

            {/* Aqui pondré las opciones para cambiar de nombre e imagen de perfil */}
          </div>
        </div>
      </div>

      <div className='row mt-5'>
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

      <div className='row justify-content-center mt-5'>
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
          {stats.length === 0 && (
            <div className='alert alert-dark'>
              No games played in this category
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserStatsScreen;
