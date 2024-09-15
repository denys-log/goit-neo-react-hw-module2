export default function Feedback({ good, neutral, bad, positiveFeedback }) {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
}
