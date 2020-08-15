import React from "react";
import Modal from "react-modal";
import "./modalStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/actions/uiActions";
import { customStyles } from "../components/helpers/modalCustomStyles";
import Question from "./Question";
import { setScore } from "../redux/actions/jeopardyActions";

Modal.setAppElement("#root");

const JeopardyModal = () => {
  const dispatch = useDispatch();
  const { modalOpen } = useSelector((state) => state.ui);
  const { trivia, idx, score } = useSelector((state) => state.jeopardy);
  console.log(trivia, idx, score);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const getPoints = (correct, difficulty, value) => {
    let hits = score.hits;
    let errors = score.errors;
    let points = score.points;

    if (correct) {
      hits = hits + 1;
      points = points + value;
    } else {
      errors = errors + 1;
      points = points - value;
    }

    const newScore = {
      hits,
      errors,
      points,
    };

    dispatch(setScore(newScore));
  };

  return (
    <Modal
      isOpen={modalOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={handleCloseModal}
      style={customStyles}
      contentLabel='Example Modal'>
      <div className='row'>
        <Question
          trivia={trivia}
          idx={` x ${(idx + 1) * 100}`}
          getPoints={getPoints}
          value={(idx + 1) * 100}
        />
      </div>
    </Modal>
  );
};

export default JeopardyModal;
