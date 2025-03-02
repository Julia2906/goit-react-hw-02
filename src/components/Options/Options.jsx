import styles from './Options.module.css';

const Options = ({
  feedback,
  onUpdateFeedback,
  totalfeedback,
  onResetFeedback,
}) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.btnGood}
        onClick={() => onUpdateFeedback('good')}
      >
        Good
      </button>
      <button
        className={styles.btnNeutral}
        onClick={() => onUpdateFeedback('neutral')}
      >
        Neutral
      </button>
      <button className={styles.btnBad} onClick={() => onUpdateFeedback('bad')}>
        Bad
      </button>
      {totalfeedback > 0 && (
        <button className={styles.btnReset} onClick={onResetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
