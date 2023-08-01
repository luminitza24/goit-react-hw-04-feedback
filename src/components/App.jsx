import { Component } from 'react';
import Feedback from './feedback/Feedback';
import Statistics from './statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = value => {
    this.setState({
      [value]: this.state[value] + 1,
    });
  };

  countFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };

  render() {
    const totalFeedback = this.countFeedback();

    return (
      <>
        <section>
          <Title title={'Please leave feedback'} />
          <Feedback addFeedback={this.addFeedback} />
        </section>
        <section>
          {totalFeedback === 0 && <Notify message="There is no feedback!" />}
          {totalFeedback !== 0 && <Title title={'Statistics'} />}
          {totalFeedback !== 0 && (
            <Statistics {...this.state} countFeedback={totalFeedback} />
          )}
        </section>
      </>
    );
  }
}

const Title = ({ title }) => {
  return <h2 className="section-title">{title}</h2>;
};

const Notify = ({ message }) => {
  return <h3 className="message">{message}</h3>;
};
