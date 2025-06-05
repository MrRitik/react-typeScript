import { useState } from "react";
import "./App.css";
import Annoucement from "./components/Annoucement";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import User from "./components/User";

function App() {
  const [count, setCount] = useState(0)
  const personName = {
    fName: "Ritik",
    lName: "Singh",
  };

  const personList = [
    {
      fName: "Ritik",
      lName: "Singh",
    },
    {
      fName: "Sahil",
      lName: "Singh",
    },
  ];
  const handleClick = () => {
    setCount((count) => count + 1)
  }
  return (
    <>
      <Greet
        name="Ritik"
        age={24}
        islogin={false}
        person={personName}
        list={personList}
        status="error"
      />
      <Heading>This is Heading</Heading>
      <Annoucement>
        <Heading>This is an Announcemet</Heading>
      </Annoucement>
      <Button handleClick={handleClick}
      count={count}
      />
      <Container
        styles={{
          border: "5px blue solid",
          background: "white",
          color: "red",
          padding: "10px 0",
          marginTop: "15px",
        }}
      />
        <User />
    </>
  );
}

export default App;
