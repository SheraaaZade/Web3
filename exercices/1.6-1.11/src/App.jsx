import { useState, useEffect } from 'react'
import Statistics from './Statistics'
import LoadingComponent from './LoadingComponent'

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleGoodClick = () => {
        setGood(good + 1);
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1);
    }

    const handleBadClick = () => {
        setBad(bad + 1);
    }


    return (
        <div>
            <h1>Give feedback</h1>
            <button onClick={handleGoodClick}> Good</button>
            <button onClick={handleNeutralClick}> Neutral</button>
            <button onClick={handleBadClick}> Bad</button>

            {loading ? (
                <LoadingComponent />
            ) : (
                <Statistics good={good} neutral={neutral} bad={bad} />
            )}
        </div>
    )
}

export default App