import React, { useState } from 'react'

const Context = React.createContext(null);


const ProviderWrapper = ({ children }) => {
    const [good, setGood] = useState(0);
    const [ok, setOk] = useState(0);
    const [bad, setBad] = useState(0);


    const increaseGood = () => setGood((prev) => prev + 1);
    const increaseOk = () => setOk((prev) => prev + 1);
    const increaseBad = () => setBad((prev) => prev + 1);

    const resetAll = () => {
        setGood(0);
        setOk(0);
        setBad(0);
    };


    const contextValue = {
        good,
        ok,
        bad,
        increaseBad,
        increaseGood,
        increaseOk,
        resetAll,
    }

    return (
        <Context.Provider value ={contextValue}>
            {children}
        </Context.Provider>
    )
}

export { Context, ProviderWrapper };