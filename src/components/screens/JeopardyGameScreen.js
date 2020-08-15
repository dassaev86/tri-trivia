import React from "react";
import { useFetchQuestions } from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
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

  console.log(category1);

  const handleSelectQuestion = (trivia, idx) => {
    dispatch(setTrivia(trivia, idx));
    dispatch(openModal());
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
      <h1>Jeopardy Game Screen</h1>

      <div className='row justify-content-center'>
        <div className='col-2'>
          <div className='card bg-warning mb-3' style={{ maxWidth: "18rem" }}>
            <div className='card-body'>
              <h5 className='card-title'>{category1[0].category}</h5>
            </div>
          </div>
          {category1.map((question, index) => (
            <div
              key={question.question}
              className='card bg-primary mb-3'
              onClick={() => handleSelectQuestion(question, index)}
              style={{ maxWidth: "18rem" }}>
              <div className='card-body' style={{ cursor: "pointer" }}>
                <h1 className='card-title'>{100 * (index + 1)}</h1>
              </div>
            </div>
          ))}
        </div>
        {/* 
        <div className='col-2'>
          {category2.map((question, index) => (
            <div
              key={question.question}
              className='card bg-primary mb-3'
              style={{ maxWidth: "18rem" }}>
              <div class='card-body'>
                <h1 class='card-title'>{100 * (index + 1)}</h1>
              </div>
            </div>
          ))}
        </div>

        <div className='col-2'>
          {category3.map((question, index) => (
            <div
              key={question.question}
              className='card bg-primary mb-3'
              style={{ maxWidth: "18rem" }}>
              <div class='card-body'>
                <h1 class='card-title'>{100 * (index + 1)}</h1>
              </div>
            </div>
          ))}
        </div>

        <div className='col-2'>
          {category4.map((question, index) => (
            <div
              key={question.question}
              className='card bg-primary mb-3'
              style={{ maxWidth: "18rem" }}>
              <div class='card-body'>
                <h1 class='card-title'>{100 * (index + 1)}</h1>
              </div>
            </div>
          ))}
        </div>

        <div className='col-2'>
          {category5.map((question, index) => (
            <div
              key={question.question}
              className='card bg-primary mb-3'
              style={{ maxWidth: "18rem" }}>
              <div class='card-body'>
                <h1 class='card-title'>{100 * (index + 1)}</h1>
              </div>
            </div>
          ))}
        </div> */}
      </div>

      <JeopardyModal />
    </div>
  );
};

export default JeopardyGameScreen;
