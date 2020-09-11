import React, { useState } from "react";
import Modal from "react-modal";
import "./modalStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/actions/uiActions";
import { customStyles } from "../components/helpers/modalCustomStyles";
import Question from "./Question";
import { setScore } from "../redux/actions/jeopardyActions";
import "./modalStyle.css";

Modal.setAppElement("#root");

const JeopardyModal = () => {
  const dispatch = useDispatch();
  const [showButtonClose, setShowButtonClose] = useState(false);
  const { modalOpen } = useSelector((state) => state.ui);
  const { trivia, idx, score } = useSelector((state) => state.jeopardy);
  console.log(trivia, idx, score);

  const handleCloseModal = () => {
    dispatch(closeModal());
    setShowButtonClose(false);
  };

  const getPoints = (correct, difficulty, value) => {
    let hits = score.hits;
    let errors = score.errors;
    let points = score.points;
    let selectedElement = document.getElementById(trivia.question);

    if (correct) {
      hits = hits + 1;
      points = points + value;
      selectedElement.classList.replace("bg-primary", "bg-success");
    } else {
      errors = errors + 1;
      points = points - value;
      selectedElement.classList.replace("bg-primary", "bg-danger");
    }

    const newScore = {
      hits,
      errors,
      points,
    };

    setShowButtonClose(true);
    dispatch(setScore(newScore));
  };

  return (
    <Modal
      isOpen={modalOpen}
      // onAfterOpen={afterOpenModal}
      // onRequestClose={handleCloseModal}
      style={customStyles}
      contentLabel='Example Modal'>
      <div className='row justify-content-center'>
        <div className='col-12'>
          <Question
            trivia={trivia}
            idx={` x ${(idx + 1) * 100}`}
            getPoints={getPoints}
            value={(idx + 1) * 100}
            jeopardy={true}
          />
        </div>
        {showButtonClose && (
          <button className='btn btn-warning' onClick={handleCloseModal}>
            Next Question
          </button>
        )}
      </div>
    </Modal>
  );
};

export default JeopardyModal;
