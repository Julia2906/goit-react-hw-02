import { useEffect, useState } from 'react';

import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    try {
      const savedFeedback = window.localStorage.getItem('saved-feedback');
      return savedFeedback
        ? JSON.parse(savedFeedback)
        : {
            good: 0,
            neutral: 0,
            bad: 0,
          };
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return { good: 0, neutral: 0, bad: 0 };
    }
  });

  const updateFeedback = feedbackType => {
    if (feedbackType === 0) {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    } else
      setFeedback(prevFeedback => ({
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      }));
  };

  useEffect(() => {
    window.localStorage.setItem('saved-feedback', JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const percPositiveReviews = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        feedback={feedback}
        onUpdateFeedback={updateFeedback}
        totalfeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          percPositiveReviews={percPositiveReviews}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};
export default App;
