import { useState } from "react";
import Annoucement from "../components/Annoucement";

import Container from "../components/Container";
import Greet from "../components/Greet";
import Heading from "../components/Heading";
import LoginBtn from "../components/LoginBtn";
import User from "../components/User";
import { Link, useNavigate } from "react-router-dom";
import Portals from "../components/Portals";
import { Button } from "@mui/material";
import CustomButton from "../components/Button";
import ReduxCounter from "../components/ReduxCounter";
import AxiosExample from "../components/AxiosExample";

const Home = () => {
  const [count, setCount] = useState(0);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const handlebtnClick = () => {
    navigate("/life");
  };



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
      <CustomButton handleClick={handleClick} count={count} />
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
      <ul>
        <Link to="/user/101">User 101</Link>
        <Link to="/user/201">User 201</Link>
      </ul>
      <LoginBtn />
      <div>
        <h1>React Portal Example with TypeScript</h1>
        <button onClick={() => setModalOpen(true)}>Open Modal</button>

        <Portals isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h2>This is a modal!</h2>
          <p>Rendered using React Portal with TypeScript.</p>
        </Portals>
      </div>
      <div>
        <h2>React LifeCycle methods</h2>
        <Button variant="contained" onClick={handlebtnClick}>
          LifeCycle
        </Button>
      </div>
      <div>
      <h3>Counter using Redux-toolkit</h3>
        <ReduxCounter />
      </div>
      <h2>Axios Example</h2>
      <AxiosExample />
    </>
  );
};

export default Home;
