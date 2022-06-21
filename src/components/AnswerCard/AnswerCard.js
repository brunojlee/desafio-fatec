import './AnswerCard.css';

export default function AnswerCard(props) {
  return (
    <div className="answer_card">
      <div>{props.object.question}</div>
      {
        props.object.answer && <div>{props.object.answer}</div>
      }
    </div>
  )
}
