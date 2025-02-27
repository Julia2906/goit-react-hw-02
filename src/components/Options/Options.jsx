const Options = ({ feedback, onUpdateFeedback, totalfeedback }) => {
  return (
    <div>
      <button onClick={() => onUpdateFeedback('good')}> Good</button>
      <button onClick={() => onUpdateFeedback('neutral')}>Neutral</button>
      <button onClick={() => onUpdateFeedback('bad')}>Bad</button>
      {totalfeedback > 0 && (
        <button onClick={() => onUpdateFeedback(0)}>Reset</button>
      )}
    </div>
  );
};
export default Options;
