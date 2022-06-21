
export default function AnswerCard(props) {
  return (
    <div className="answer_card">
      <div>Número da questão {props.object.id}</div>
      <div>{props.object.question}</div>
      {
        props.object.answer && <div>{props.object.answer}</div>
      }
    </div>
  )
}
