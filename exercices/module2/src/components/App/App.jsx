import Display from "components/Display/Display"
import Button from "components/Button/Button"
import { useState } from "react"

const App = () => {
    const [counter, setCounter] = useState(0)
    
    const changeCount = (delta) => {
        setCounter(counter + parseInt(delta));
    };

    return (
        <div>
            <Display counter={counter} />
            <Button changeCount={changeCount} text="Incrémenter" delta={1} />
            <Button changeCount={changeCount} text="Décrémenter" delta={-1} />
            <Button changeCount={changeCount} text="Reset" delta={-counter.toString()} />
        </div>
    );
};

export default App;