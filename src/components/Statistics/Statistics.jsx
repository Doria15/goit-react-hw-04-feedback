import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p className={css.feedLabel}>
        Good: <span className={css.feedCount}>{good}</span>
      </p>
      <p className={css.feedLabel}>
        Neutral: <span className={css.feedCount}>{neutral}</span>
      </p>
      <p className={css.feedLabel}>
        Bad: <span className={css.feedCount}>{bad}</span>
      </p>
      <p className={css.feedLabel}>
        Total: <span className={css.feedCount}>{total}</span>
      </p>
      <p className={css.feedLabel}>
        Positive Feedback:{' '}
        <span className={css.feedCount}>{positivePercentage}%</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
