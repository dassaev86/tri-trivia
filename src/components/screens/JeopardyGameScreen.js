import React from "react";
import { useFetchQuestions } from "../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/actions/uiActions";
import JeopardyModal from "../JeopardyModal";
import { setTrivia } from "../../redux/actions/jeopardyActions";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";
import {
  saveGameResultsToDB,
  saveGameResultsToGeneralStats,
} from "../../redux/actions/gameActions";

const JeopardyGameScreen = () => {
  const { categories } = useSelector((state) => state.jeopardy);
  const dispatch = useDispatch();
  const { score, active } = useSelector((state) => state.jeopardy);
  const history = useHistory();

  useEffect(() => {
    if (score.hits + score.errors === 25) {
      dispatch(
        saveGameResultsToDB(score.hits, score.errors, score.points, "jeopardy"),
      );
      dispatch(
        saveGameResultsToGeneralStats(
          score.hits,
          score.errors,
          score.points,
          "jeopardy-mode",
        ),
      );
    }
  }, [score, dispatch]);

  if (!active) {
    history.replace("/jeopardy");
  }

  const { results: category1 } = useFetchQuestions("5", "all", categories[0]);
  const { results: category2 } = useFetchQuestions("5", "all", categories[1]);
  const { results: category3 } = useFetchQuestions("5", "all", categories[2]);
  const { results: category4 } = useFetchQuestions("5", "all", categories[3]);
  const { results: category5 } = useFetchQuestions("5", "all", categories[4]);

  console.log(score);

  console.log(category1);

  const handleSelectQuestion = (trivia, idx) => {
    let selectedElement = document.getElementById(trivia.question);

    if (selectedElement.classList.contains("alreadyAnswered")) {
      Swal.fire(
        "Already Answered",
        "You already answer this question",
        "warning",
      );
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
      <div
        className='row justify-content-center mt-5'
        style={{ marginBottom: "-70px" }}>
        <div className='col-2'>
          <div
            className='card bg-warning mb-3'
            style={{ maxWidth: "18rem", height: "70%" }}>
            <div className='card-category'>
              <h5>{category1[0].category}</h5>
            </div>
          </div>
        </div>

        <div className='col-2'>
          <div
            className='card bg-warning mb-3'
            style={{ maxWidth: "18rem", height: "70%" }}>
            <div className='card-category'>
              <h5>{category2[0].category}</h5>
            </div>
          </div>
        </div>

        <div className='col-2'>
          <div
            className='card bg-warning mb-3'
            style={{ maxWidth: "18rem", height: "70%" }}>
            <div className='card-category'>
              <h5>{category3[0].category}</h5>
            </div>
          </div>
        </div>

        <div className='col-2'>
          <div
            className='card bg-warning mb-3'
            style={{ maxWidth: "18rem", height: "70%" }}>
            <div className='card-category'>
              <h5>{category4[0].category}</h5>
            </div>
          </div>
        </div>

        <div className='col-2'>
          <div
            className='card bg-warning mb-3'
            style={{ maxWidth: "18rem", height: "70%" }}>
            <div className='card-category'>
              <h5>{category5[0].category}</h5>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='row justify-content-center mt-5'>
          <div className='col-2'>
            {/* <div className='card bg-warning mb-3' style={{ maxWidth: "18rem" }}>
              <div className='card-body'>
                <h5 className='card-title'>{category1[0].category}</h5>
              </div>
            </div> */}
            {category1.map((question, index) => (
              <div
                key={question.question}
                id={question.question}
                className='card bg-primary mb-3 '
                onClick={() => handleSelectQuestion(question, index)}
                style={{ maxWidth: "18rem" }}>
                <div className='card-body' style={{ cursor: "pointer" }}>
                  <h4 className='card-title'>{100 * (index + 1)}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className='col-2'>
            {/* <div className='card bg-warning mb-3' style={{ maxWidth: "18rem" }}>
              <div className='card-body justify-content-center'>
                <h5 className='card-title'>{category2[0].category}</h5>
              </div>
            </div> */}
            {category2.map((question, index) => (
              <div
                key={question.question}
                id={question.question}
                className='card bg-primary mb-3 '
                onClick={() => handleSelectQuestion(question, index)}
                style={{ maxWidth: "18rem" }}>
                <div className='card-body' style={{ cursor: "pointer" }}>
                  <h4 className='card-title'>{100 * (index + 1)}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className='col-2'>
            {/* <div className='card bg-warning mb-3' style={{ maxWidth: "18rem" }}>
              <div className='card-body'>
                <h5 className='card-title'>{category3[0].category}</h5>
              </div>
            </div> */}
            {category3.map((question, index) => (
              <div
                key={question.question}
                id={question.question}
                className='card bg-primary mb-3 '
                onClick={() => handleSelectQuestion(question, index)}
                style={{ maxWidth: "18rem" }}>
                <div className='card-body' style={{ cursor: "pointer" }}>
                  <h4 className='card-title'>{100 * (index + 1)}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className='col-2'>
            {/* <div className='card bg-warning mb-3' style={{ maxWidth: "18rem" }}>
              <div className='card-body'>
                <h5 className='card-title'>{category4[0].category}</h5>
              </div>
            </div> */}
            {category4.map((question, index) => (
              <div
                key={question.question}
                id={question.question}
                className='card bg-primary mb-3 '
                onClick={() => handleSelectQuestion(question, index)}
                style={{ maxWidth: "18rem" }}>
                <div className='card-body' style={{ cursor: "pointer" }}>
                  <h4 className='card-title'>{100 * (index + 1)}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className='col-2'>
            {/* <div className='card bg-warning mb-3' style={{ maxWidth: "18rem" }}>
              <div className='card-body'>
                <h5 className='card-title'>{category5[0].category}</h5>
              </div>
            </div> */}
            {category5.map((question, index) => (
              <div
                key={question.question}
                id={question.question}
                className='card bg-primary mb-3 '
                onClick={() => handleSelectQuestion(question, index)}
                style={{ maxWidth: "18rem" }}>
                <div className='card-body' style={{ cursor: "pointer" }}>
                  <h4 className='card-title'>{100 * (index + 1)}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {score.hits + score.errors < 25 && (
          <div className='row justify-content-md-center mb-5'>
            <div className='col-sm-12 col-lg-6'>
              <div className='card'>
                <div className='card-header'>
                  <h4>Dassaev</h4>
                </div>
                <div className='card-body'>
                  <h2 className='card-text'> Points: {score.points} </h2>
                </div>
              </div>
            </div>
          </div>
        )}

        {score.hits + score.errors === 25 && (
          <div className='row justify-content-md-center mb-5'>
            <div className='col-sm-12 col-lg-6'>
              {/* Aqui va el card de ganaste la partida */}
              <div className='card'>
                <div className='card-header'>Thanks for playing!</div>
                <div className='card-body'>
                  <h5 className='card-title'>Results</h5>
                  <p className='card-text'> Correct Anwsers: {score.hits} </p>
                  <p className='card-text'>
                    {" "}
                    Incorrect Anwsers: {score.errors}{" "}
                  </p>
                  <b>
                    <h4 className='card-text'>
                      {" "}
                      Total Points: {score.points}{" "}
                    </h4>
                  </b>

                  <Link to='/jeopardy' className='btn btn-primary mt-5'>
                    Play Again
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <JeopardyModal />
      </div>
    </div>
  );
};

export default JeopardyGameScreen;
