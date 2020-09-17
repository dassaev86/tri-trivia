import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGeneralStats } from "../../redux/actions/statsActions";
import RecordsTable from "../RecordsTable";
import Loading from "../Loading";

const RecordsScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGeneralStats());
  }, [dispatch]);

  const { traditional, strikeout, jeopardy } = useSelector(
    (state) => state.stats,
  );

  const traditionalTop = traditional.slice(0, 10);
  const strikeoutTop = strikeout.slice(0, 10);
  const jeopardyTop = jeopardy.slice(0, 10);

  if (
    traditionalTop.length === 0 ||
    strikeoutTop.length === 0 ||
    jeopardyTop === 0
  ) {
    return <Loading />;
  }

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-12 col-sm-12 col-lg-8 mt-5'>
          <div>
            <h5>Traditional Mode Top 10</h5>
          </div>
          <RecordsTable records={traditionalTop} />
        </div>

        <div className='col-12 col-sm-10 col-lg-8 mt-5'>
          <div>
            <h5>Strikeout Mode Top 10</h5>
          </div>
          <RecordsTable records={strikeoutTop} />
        </div>

        <div className='col-12 col-sm-10 col-lg-8 mt-5'>
          <div>
            <h5>Jeopardy Mode Top 10</h5>
          </div>
          <RecordsTable records={jeopardyTop} />
        </div>
      </div>
    </div>
  );
};

export default RecordsScreen;
