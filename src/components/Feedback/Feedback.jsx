import { Component } from 'react';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

import css from '../Feedback/Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addCount = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const value = this.state.good;
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const result = Math.round(100 / (total / value));
    return result;
  };

  render() {
    return (
      <div className={css.wrapper}>
        <div className={css.section}>
          <h3 className={css.title}>Please leave feedback</h3>
          <FeedbackOptions
            click={this.addCount}
            options={Object.keys(this.state)}
          />
        </div>
        {this.countTotalFeedback() ? (
          <Statistics
            allStates={this.state}
            total={this.countTotalFeedback()}
            positivePersentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
export default Feedback;
