/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import AnswerCard from "../../components/AnswerCard/AnswerCard";
import FeedbackContext from "../../context/FeedbackContext";

export default function QuestionCard() {
  const [values, setValues] = useState();
  const [lastId, setLastId] = useState();
  const {
    userEmail,
    questionList,
    setQuestionList,
  } = useContext(FeedbackContext);

  useEffect(() => {
    const questionListLS = localStorage.getItem("questionList");
    if (questionListLS) {
      setQuestionList(JSON.parse(questionListLS));
      setLastId(JSON.parse(questionListLS).length);
    } else{
      setLastId(0);
    }
  }, []);
  
  const handleValues = (value) => {
    const id = lastId + 1;
    setValues((prevValues) => ({
      ...prevValues,
      id,
      [value.target.name]: value.target.value,
      answer: "",
    }));
  };

  const handleClick = () => {
    setQuestionList((prevQuestionList) => [
      ...prevQuestionList,
      values,
    ]);
    setLastId((prevLastId) => prevLastId + 1);
  }

  useEffect(() => {
    localStorage.setItem("questionList", JSON.stringify(questionList));

  }, [questionList]);

  return (
    <>
      <div className="question_container">
        Bem vindo {userEmail}
        <textarea
        placeholder="Digite sua pergunta" className="form-control"
        type="text"
        name="question"
        onChange={handleValues}/>
      </div>
      <button className="btn btn-success" onClick={handleClick}>Perguntar</button>
      {
        questionList && questionList.map((e) => (
          <div key={e.id}>
             <AnswerCard object={e} />
          </div>
        ))
      }
      </>
  )
}

    
