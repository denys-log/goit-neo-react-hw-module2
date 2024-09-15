import { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import './App.css';

const GRADE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [grade, setGrade] = useState(() => {
    const savedGrade = window.localStorage.getItem('grade');
    if (savedGrade !== null) {
      return JSON.parse(savedGrade);
    }
    return GRADE;
  });

  useEffect(() => {
    window.localStorage.setItem('grade', JSON.stringify(grade));
  }, [grade]);

  const updateFeedback = feedbackType => {
    setGrade(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => setGrade(GRADE);

  const totalFeedback = grade.good + grade.neutral + grade.bad;
  const positiveFeedback = Math.round((grade.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        onClick={updateFeedback}
        totalFeedback={totalFeedback}
        onReset={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback {...grade} positiveFeedback={positiveFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
