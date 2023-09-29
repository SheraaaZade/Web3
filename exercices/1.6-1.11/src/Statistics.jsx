import React from "react";

const Statistics = ({ good, neutral, bad }) => {
    const totalFeedback = good + neutral + bad;
    const averageScore = (good - bad) / totalFeedback;
    const positiveFeedbackPercentage = (good / totalFeedback) * 100;

    if (good === 0 && bad === 0 && neutral === 0) {

        return (<div>
            <h2>Statistics</h2>
            <p>No feedback given                                                                                                            .</p>
        </div>
        )

    } else {

        return (
            <div>
                <h2>Statistics</h2>

                <p>Total feedback: {totalFeedback}</p>
                <p>Average score: {isNaN(averageScore) ? 0 : averageScore.toFixed(2)}</p>
                <p>Positive feedback percentage: {isNaN(positiveFeedbackPercentage) ? 0 : positiveFeedbackPercentage.toFixed(2)}%</p>

            </div>
        )


    }
}

export default Statistics;