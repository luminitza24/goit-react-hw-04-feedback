import './Feedback.css';

const Feedback = ({ addFeedback }) => {
  const data = [
    { id: 1, value: 'good', text: 'Good' },
    { id: 2, value: 'neutral', text: 'Neutral' },
    { id: 3, value: 'bad', text: 'Bad' },
  ];

  const handleClick = e => {
    const value = e.target.value;
    addFeedback(value);
  };
  return (
    <div className="buttons-section">
      {data.map(btn => {
        const { id, value, text } = btn;
        return (
          <button
            key={id}
            className="buttons"
            value={value}
            onClick={handleClick}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
};

export default Feedback;
