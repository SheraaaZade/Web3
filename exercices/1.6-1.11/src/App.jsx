import { useState } from 'react'

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    const handleGoodClick = () => {
        setGood(good + 1);
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1);
    }

    const handleBadClick = () => {
        setBad(bad + 1);
    }

    const totalFeedback = good + neutral + bad;
    const averageScore = (good - bad) / totalFeedback;
    const positiveFeedbackPercentage = (good / totalFeedback) * 100;


    return (
        <div>
            <h1>Give feedback</h1>
            <button onClick={handleGoodClick}> Good</button>
            <button onClick={handleNeutralClick}> Neutral</button>
            <button onClick={handleBadClick}> Bad</button>

            <p>Total feedback: {totalFeedback}</p>
            <p>Average score: {isNaN(averageScore) ? 0 : averageScore.toFixed(2)}</p>
            <p>Positive feedback percentage: {isNaN(positiveFeedbackPercentage) ? 0 : positiveFeedbackPercentage.toFixed(2)}%</p>
        </div>
    )
}

export default App