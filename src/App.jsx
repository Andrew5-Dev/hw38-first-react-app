import Button from './components/Button.jsx'
import Input from "./components/Input.jsx";

const App = () => {
    return (
        <div className="container">
            <h1>React App 1</h1>
            <div className="btn">
                <Button text="Submit" type="submit"/>
                <Button text="Reset" type="reset"/>
                <Button text="Enter" type="button"/>
            </div>
            <div>
                <Input className="input" placeholder="Input text"/>
            </div>
        </div>
    )
}
export default App