import Display from "components/Display/Display"
import Button from "components/Button/Button"
import { useState } from "react"

const App = () => {
    const [counter, setCounter] = useState(JSON.parse(localStorage.getItem("counter")) || 0)
    
    const changeCount = (delta) => {
        localStorage.setItem("counter", JSON.stringify(counter + delta));
        setCounter(counter + delta);
        
    };

    return (
        <div>
            <Display counter={counter} />
            <Button changeCount={changeCount} text="Incrémenter" delta={1} />
            <Button changeCount={changeCount} text="Décrémenter" delta={-1} />
            <Button changeCount={changeCount} text="Reset" delta={-counter} />
        </div>
    );
};

export default App;