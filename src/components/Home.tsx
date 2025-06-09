import { useState } from "react";
import Annoucement from "./Annoucement";
import Button from "./Button";
import Container from "./Container";
import Greet from "./Greet";
import Heading from "./Heading";
import LoginBtn from "./LoginBtn";
import User from "./User";
import { Link } from "react-router-dom";

const Home = () => {
  const [count, setCount] = useState(0);

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
    setCount((count) => count + 1);
  };

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
      <Button handleClick={handleClick} count={count} />
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
      <ul >
        <Link to="/user/101" >
          User 101
        </Link>
        <Link to="/user/201">User 201</Link>
      </ul>
      <LoginBtn />
    </>
  );
};

export default Home;
