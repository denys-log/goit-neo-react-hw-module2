const GRADES = ['Good', 'Neutral', 'Bad'];

export default function Options({ onClick, totalFeedback, onReset }) {
  return (
    <div>
      {GRADES.map(grade => (
        <button
          key={grade}
          type="button"
          onClick={() => onClick(grade.toLocaleLowerCase())}
        >
          {grade}
        </button>
      ))}
      {totalFeedback > 0 ? (
        <button type="button" onClick={onReset}>
          Reset
        </button>
      ) : null}
    </div>
  );
}
