import { db } from "../../firebase/firebaseConfig";
import { types } from "../types/types";

export const loadGeneralStats = () => {
  return async (dispatch) => {
    const traditionalStatsSnap = await db
      .collection("traditional-mode")
      .orderBy("points", "desc")
      .get();

    const strikeoutStatsSnap = await db
      .collection("strikeout-mode")
      .orderBy("points", "desc")
      .get();

    const jeopardyStatsSnap = await db
      .collection("jeopardy-mode")
      .orderBy("points", "desc")
      .get();

    const traditionalStats = [];
    const strikeoutStats = [];
    const jeopardyStats = [];

    traditionalStatsSnap.forEach((game) => {
      traditionalStats.push(game.data());
    });

    strikeoutStatsSnap.forEach((game) => {
      strikeoutStats.push(game.data());
    });

    jeopardyStatsSnap.forEach((game) => {
      jeopardyStats.push(game.data());
    });

    dispatch(statsSetRecords(traditionalStats, strikeoutStats, jeopardyStats));
  };
};

const statsSetRecords = (
  traditionalRecords,
  strikeoutRecords,
  jeopardyRecords,
) => ({
  type: types.statsSetRecords,
  payload: {
    traditionalRecords,
    strikeoutRecords,
    jeopardyRecords,
  },
});
