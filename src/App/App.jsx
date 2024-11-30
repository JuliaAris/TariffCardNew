import { useState } from "react";
import Card from "/src/Components/Card/Card.jsx";
import "/src/App/App.scss";

function App() {
  const [isActive, setIsActive] = useState(0);

  return (
    <div className="App">
      <Card
        price="300"
        speed="10"
        color="1"
        isActive={isActive === "1"}
        onButtonClick={setIsActive}
      />
      <Card
        price="450"
        speed="50"
        color="2"
        isActive={isActive === "2"}
        onButtonClick={setIsActive}
      />
      <Card
        price="550"
        speed="100"
        color="3"
        isActive={isActive === "3"}
        onButtonClick={setIsActive}
      />
      <Card
        price="1000"
        speed="200"
        color="4"
        isActive={isActive === "4"}
        onButtonClick={setIsActive}
      />
    </div>
  );
}

export default App;
