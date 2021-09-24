import "./App.css";
import Header from "./components/header/Header";
import Button from "./components/button/Button";
function App() {
  return (
    <div className="App">
      <Header className="header" text="This is React Testing Library Demo" />
      <Button className="button" popUpText="Oopsiee, you've clicked me!" />
    </div>
  );
}

export default App;
