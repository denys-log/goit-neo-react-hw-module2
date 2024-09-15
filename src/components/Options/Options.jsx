export default function Options({ onClick, totalFeedback, onReset }) {
  return (
    <div>
      <button type="button" onClick={() => onClick('good')}>
        Good
      </button>
      <button type="button" onClick={() => onClick('neutral')}>
        Neutral
      </button>
      <button type="button" onClick={() => onClick('bad')}>
        Bad
      </button>
      {totalFeedback > 0 ? (
        <button type="button" onClick={onReset}>
          Reset
        </button>
      ) : null}
    </div>
  );
}
