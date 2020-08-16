import React from "react";
import { useFetchQuestions } from "../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/actions/uiActions";
import JeopardyModal from "../JeopardyModal";
import { setTrivia } from "../../redux/actions/jeopardyActions";

const JeopardyGameScreen = () => {
  const { results: category1 } = useFetchQuestions("5", "all", "10");
  const { results: category2 } = useFetchQuestions("5", "all", "11");
  const { results: category3 } = useFetchQuestions("5", "all", "12");
  const { results: category4 } = useFetchQuestions("5", "all", "13");
  const { results: category5 } = useFetchQuestions("5", "all", "14");
  const dispatch = useDispatch();
  const { score } = useSelector((state) => state.jeopardy);
  console.log(score);

  console.log(category1);

  const handleSelectQuestion = (e, trivia, idx) => {
    let selectedElement = document.getElementById(trivia.question);

    if (selectedElement.classList.contains("alreadyAnswered")) {
      alert("Already Answered");
      return;
    }

    dispatch(setTrivia(trivia, idx));
    dispatch(openModal());
    selectedElement.classList.add("alreadyAnswered");
  };

  if (
    category1.length === 0 ||
    category2.length === 0 ||
    category3.length === 0 ||
    category4.length === 0 ||
    category5.length === 0
  ) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-2'>
          <div className='card bg-warning mb-3' style={{ maxWidth: "18rem" }}>
            <div className='card-body'>
              <h5 className='card-title'>{category1[0].category}</h5>
            </div>
          </div>
          {category1.map((question, index) => (
            <div
              key={question.question}
              id={question.question}
              className='card bg-primary mb-3 '
              onClick={(e) => handleSelectQuestion(e, question, index)}
              style={{ maxWidth: "18rem" }}>
              <div className='card-body' style={{ cursor: "pointer" }}>
                <h4 className='card-title'>{100 * (index + 1)}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className='col-2'>
          <div className='card bg-warning mb-3' style={{ maxWidth: "18rem" }}>
            <div className='card-body'>
              <h5 className='card-title'>{category2[0].category}</h5>
            </div>
          </div>
          {category2.map((question, index) => (
            <div
              key={question.question}
              id={question.question}
              className='card bg-primary mb-3 '
              onClick={(e) => handleSelectQuestion(e, question, index)}
              style={{ maxWidth: "18rem" }}>
              <div className='card-body' style={{ cursor: "pointer" }}>
                <h4 className='card-title'>{100 * (index + 1)}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className='col-2'>
          <div className='card bg-warning mb-3' style={{ maxWidth: "18rem" }}>
            <div className='card-body'>
              <h5 className='card-title'>{category3[0].category}</h5>
            </div>
          </div>
          {category3.map((question, index) => (
            <div
              key={question.question}
              id={question.question}
              className='card bg-primary mb-3 '
              onClick={(e) => handleSelectQuestion(e, question, index)}
              style={{ maxWidth: "18rem" }}>
              <div className='card-body' style={{ cursor: "pointer" }}>
                <h4 className='card-title'>{100 * (index + 1)}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className='col-2'>
          <div className='card bg-warning mb-3' style={{ maxWidth: "18rem" }}>
            <div className='card-body'>
              <h5 className='card-title'>{category4[0].category}</h5>
            </div>
          </div>
          {category4.map((question, index) => (
            <div
              key={question.question}
              id={question.question}
              className='card bg-primary mb-3 '
              onClick={(e) => handleSelectQuestion(e, question, index)}
              style={{ maxWidth: "18rem" }}>
              <div className='card-body' style={{ cursor: "pointer" }}>
                <h4 className='card-title'>{100 * (index + 1)}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className='col-2'>
          <div className='card bg-warning mb-3' style={{ maxWidth: "18rem" }}>
            <div className='card-body'>
              <h5 className='card-title'>{category5[0].category}</h5>
            </div>
          </div>
          {category5.map((question, index) => (
            <div
              key={question.question}
              id={question.question}
              className='card bg-primary mb-3 '
              onClick={(e) => handleSelectQuestion(e, question, index)}
              style={{ maxWidth: "18rem" }}>
              <div className='card-body' style={{ cursor: "pointer" }}>
                <h4 className='card-title'>{100 * (index + 1)}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='row justify-content-md-center mb-5'>
        <div className='col-sm-12 col-lg-6'>
          {/* Aqui va el card de ganaste la partida */}
          <div className='card'>
            <div className='card-header'>Good Luck!</div>
            <div className='card-body'>
              <h5 className='card-title'>Gamer Board:</h5>
              <p className='card-text'> Correct Anwsers: {score.hits} </p>
              <p className='card-text'> Incorrect Anwsers: {score.errors} </p>
              <b>
                <h6 className='card-text'> Total Points: {score.points} </h6>
              </b>

              {/* <Link to='/traditional' className='btn btn-primary mt-5'>
                Play Again
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      <JeopardyModal />
    </div>
  );
};

export default JeopardyGameScreen;
